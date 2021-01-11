<template>
<div class="task-bar">
    <button class="start">
        shahow
    </button>
</div>
</template>

<script>
export default {
  name: "taskBar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.task-bar{
    width: 100%;
    height: 36px;
    background-image: linear-gradient(to right, #eeeea6, #cde7ea,#e9e6c5);
}
.start{
    cursor: pointer;
    float: left;
    width: 6%;
    height: 100%;
    background-color:aquamarine;
    border: 0;
}
</style>
