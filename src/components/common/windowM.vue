<template>
<div class="window">
    <img class="wallpaper" :src="smileImg" />
</div>
</template>

<script>
import smile from '@/assets/icon/笑脸.png';
export default {
  name:'windowM',
  data(){
   return {
     smileImg: smile
   }
  }
}
</script>

<style scoped>
.window{
  overflow: hidden;
  width: 100%;
  height: calc(100% - 36px);
  background-image: #fff;
}

.wallpaper {
  height: 100%;

}
</style>
