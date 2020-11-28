<template>
  <div id="screensaver">
    <div class="content">
      <h1 class="title">shahow.top</h1>
      <typer :placeholder="placeholder" multiRow></typer>
      <button class="into"></button>
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
    };
  },
  mounted() {
    this.refresh();
  },
  methods:{
    refresh(){
      setInterval(()=>{
        this.placeholder = moment().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    }
  }
};
</script>

<style scoped="scoped">
#screensaver {
  width: 100%;
  height: 100vh;

  font-family: Inconsolata;
}
.content{
  position: absolute;
  top: 42%;
  width: 100%;
}
.title{
  font-size: 88px;
}
.into{
  cursor: pointer;
  margin-top: 6%;
  width: 40px;
  height: 40px;
  border: 0 solid transparent;
  border-radius: 40px;
  background-color: #ffffff;
}
.into:hover{
  border: 1px solid #2c3e50;
  transform: border 1s;
}

</style>
