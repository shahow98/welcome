/**
 * @param {Date} datetime
 */
export function toDateTimeString(datetime) {
	if (!(datetime instanceof Date)) {
		return '';
	}
	const year = datetime.getFullYear();
	const month = datetime.getMonth() + 1;
	const date = datetime.getDate();
	const hour = datetime.getHours();
	const min = datetime.getMinutes();
	const seconds = datetime.getSeconds();
	const mill = datetime.getMilliseconds();

	return `${year}-${numberFill(month, 2)}-${numberFill(date, 2)}`
	+ `${numberFill(hour, 2)}:${numberFill(min, 2)}:${numberFill(seconds, 2)}`
	+ `.${numberFill(mill, 3)}`;
}

/**
 * @param {number} num
 * @param {numbee} bit
 */
function numberFill(num, bit) {
	let numStr = `${num}`;
	let diff = bit - numStr.length;
	if (diff > 0) {
		while (diff--) {
			numStr = `0${numStr}`;
		}
	}
	return numStr;
}
