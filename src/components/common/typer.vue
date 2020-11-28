<template>
  <div class="typer">
    <span :style="textStyle" v-html="inputText"></span>
    <transition name="fade">
      <i
        v-show="showCursor"
        class="iconfont icon-icursor"
        :style="cursorStyle"
      ></i>
    </transition>
  </div>
</template>

<script>
export default {
  name: "typer",
  props: {
    placeholder: {
      type: String,
      default: "placeholder...",
    },
    fontSize: {
      type: Number,
      default: 30,
    },
    textColor: {
      type: String,
      default: "#000000",
    },
    cursorColor: {
      type: String,
      default: "#000000",
    },
    multiRow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputText: "",
      point: 0,
      state: "b",
      showCursor: true,
      textStyle: {
        fontSize: `${this.fontSize}px`,
        color: `${this.textColor}`,
      },
      cursorStyle: {
        fontSize: `${this.fontSize}px`,
        color: `${this.cursorColor}`,
      },
    };
  },
  computed: {
    multiText() {
      let buff = this.placeholder;
      // let buff = this.placeholder.replace(/\s/g, "&nbsp;");
      let multiText = new Array();
      if (this.multiRow) {
        multiText = buff.split("\n");
      } else {
        multiText.push(buff);
      }
      return multiText;
    },
  },
  mounted() {
    this.typerAnimation();
    this.toggleCursor();
  },
  methods: {
    showText() {
      const holder = this.multiText[0];
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
    addText(oldVal, str) {
      return `${oldVal}${str}`;
    },
    delText(oldVal) {
      let ind = oldVal.lastIndexOf("&nbsp;");
      ind = ind !== -1 ? ind : 0;
      oldVal.substring(0, ind);
      return ``;
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
