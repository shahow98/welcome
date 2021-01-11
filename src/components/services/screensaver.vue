<template>
  <div id="screensaver">
    <div class="content">
      <h1 class="title">shahow.top</h1>
      <typer :placeholder="placeholder" multiRow></typer>
      <button class="into" @click="into">
        <span>{{home}}</span>
      </button>
    </div>
  </div>
</template>

<script>
import typer from "@/components/common/typer";
import moment from "moment";

export default {
  name: "screensaver",
  components: {
    typer,
  },
  data() {
    const placeholder = "shahow";
    return {
      placeholder: placeholder,
      home:"home"
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      setInterval(() => {
        this.placeholder = moment().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
    into() {
      this.$router.push("home");
    },
  },
};
</script>

<style scoped="scoped">
#screensaver {
  width: 100%;
  height: 100vh;

  font-family: Inconsolata;
}
.content {
  position: absolute;
  top: 42%;
  width: 100%;
}
.title {
  font-size: 88px;
}
.into {
  position: relative;
  cursor: pointer;
  margin-top: 6%;
  width: 50px;
  height: 50px;
  border: 0 solid transparent;
  border-radius: 50px;
  background-color: #ffffff;
  outline-style: none;
}
.into:hover {
  transform: border 1s;
  animation: breathe 5s linear 0s infinite normal;
}
.into span {
  font-size: 40px;
}
.into::before {
  content: "";
  position: absolute;
  top: 25px;
  left: 0;
  display: block;
  width: 25px;
  height: 25px;
  filter: blur(6px);
  border: 1px solid #2c3e50;
  border-radius: 0 0 0 25px;
  background-color: #2c3e50;
  animation: rotate 5s linear -2s infinite normal;
}
.into >span{
  opacity: 0;
  color: #000;
  font-size: 20px;
  transition: opacity 2s;
}
.into:hover > span{
  opacity: 1;
  transition: opacity 2s;
}
@keyframes breathe {
  0% {
    box-shadow: 0 0 0 0 #2c3e50;
  }
  50% {
    box-shadow: 0 0 50px 20px #2c3e50;
  }
  100% {
    box-shadow: 0 0 0 0 #2c3e50;
  }
}
@keyframes rotate {
  0% {
    top: 25px;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 0 0 0 25px;
  }
  25% {
    top: 0px;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 25px 0 0 0;
  }
  50% {
    top: 0;
    left: 25px;
    width: 25px;
    height: 25px;
    border-radius: 0 25px 0 0;
  }
  75% {
    top: 25px;
    left: 25px;
    width: 25px;
    height: 25px;
    border-radius: 0 0 25px 0;
  }
  100% {
    top: 25px;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 0 0 0 25px;
  }
}
</style>
