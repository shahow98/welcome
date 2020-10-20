<template>
  <div id="screensaver">
    <!-- <span>{{ datetime }}</span>
    <h1>{{ title }}</h1> -->
    <typer :placeholder="'asdasd'" :fontSize="30"></typer>
  </div>
</template>

<script>
import { toDateTimeString } from "../../assets/js/utils.js";
import typer from "../../components/common/typer"

export default {
  name: "screensaver",
  components: {
      typer
  },
  data() {
    return {
      title: "xxxxx",
      datetime: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.datetime = toDateTimeString(new Date());
    }, 100);
  },
};
</script>

<style scoped="scoped">
</style>
