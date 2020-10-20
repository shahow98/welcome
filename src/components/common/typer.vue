<template>
  <div class="typer">
    <span :style="fontStyle">{{ inputText }}</span>
    <transition name="fade">
      <i
        v-show="showCursor"
        class="iconfont icon-icursor"
        :style="fontStyle"
      ></i>
    </transition>
  </div>
</template>

<script>
export default {
  name: "typer",
  props: {
      placeholder: String,
      fontSize: Number
  },
  data() {
    return {
      inputText: "",
      point: 0,
      state: "b",
      showCursor: true,
      fontStyle: {
        fontSize: `${this.fontSize}px`,
      },
    };
  },
  mounted() {
    this.typerAnimation();
    this.toggleCursor();
  },
  methods: {
    showText() {
      const holder = this.placeholder;
      this.inputText = holder.substring(0, this.point);
      if (this.state === "b") {
        this.point++;
        if (this.point > holder.length) {
          this.state = "l";
        }
      } else {
        this.point--;
        if (this.point < 0) {
          this.state = "b";
        }
      }
    },
    typerAnimation() {
      setInterval(() => {
        this.showText();
      }, 150);
    },
    toggleCursor() {
      setInterval(() => {
        this.showCursor = !this.showCursor;
      }, 100);
    },
  },
};
</script>

<style scoped="scoped">
@import url("../../assets/font_7nqilmsz3m/iconfont.css");
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
