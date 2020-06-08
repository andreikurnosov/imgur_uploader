<template>
  <div class="app-container">
    <AppHeader />
    <div class="ui container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  name: 'Home',
  components: {
    AppHeader
  }
}
</script>
<style scoped>
.app-container {
  width: 70vw;
  height: 100vh;
  margin: auto;
  background-color: aliceblue;
  box-shadow: 0px 0px 5px grey;
}
</style>
