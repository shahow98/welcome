<template>
  <div class="pwd-lock">
    <template v-for="(num, index) in nums" :key="index">
      <div class="num" @click="refreshNum(index)">
        {{ num }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "pwdLock",
  data() {
    return {
      token: this.generateToken(),
      nums: [0, 0, 0, 0],
      timers: [],
    };
  },
  methods: {
    generateToken() {
      return [0, 0, 0, 0].map(() => this.getRandNo());
    },
    getRandNo() {
      return parseInt(Math.random() * 100) % 10;
    },
    refreshNum(index) {
      if (!this.timers[index]) {
        const timer = setInterval(() => {
          let num = this.nums[index];
          this.nums[index] = ++num % 10;
        }, 100);
        this.timers[index] = timer;
        this.clearTimer(index);
      }
    },
    clearTimer(index) {
      setTimeout(() => {
        clearInterval(this.timers[index]);
        this.timers[index] = null;
        this.nums[index] = this.getRandNo();
      }, 5000);
    },
  },
};
</script>

<style scoped>
.pwd-lock {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  width: 100%;
}

.num {
  cursor: pointer;
  width: 20%;
  height: 60px;
  line-height: 60px;
  font-size: 50px;
  font-weight: 400;
  border-bottom: 2px solid #2c3e50;
}

.num:hover {
  border-top: 1px solid #2c3e50;
  border-left: 1px solid #2c3e50;
  border-right: 1px solid #2c3e50;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>