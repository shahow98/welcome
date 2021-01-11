<template>
  <div id="home">
    <window-m id="window" />
    <task-bar id="task-bar" />
  </div>
</template>

<script>
import windowM from "@/components/common/windowM";
import taskBar from "@/components/common/taskBar";
export default {
  name: "home",
  components: {
    windowM,
    taskBar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100vh;
}
#task-bar {
  position: fixed;
  bottom: 0;
}
</style>
