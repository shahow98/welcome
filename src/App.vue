<template>
  <screensaver></screensaver>
</template>

<script>
import screensaver from "./components/services/screensaver.vue";
export default {
  name: "App",
  components: {
    screensaver,
  },
};
</script>

<style>
@import url("./assets/css/common.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
