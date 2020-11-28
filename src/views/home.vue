<template>
  <div class="home">
    <screensaver/>
  </div>
</template>

<script>
// @ is an alias to /src
import screensaver from '@/components/services/screensaver.vue'

export default {
  name: 'home',
  components: {
    screensaver
  }
}
</script>
