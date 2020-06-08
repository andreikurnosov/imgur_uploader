<template>
  <div id="app" class="app-container">
    <AppHeader />
    <Home />
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
import Home from './views/Home.vue'
export default {
  components: {
    AppHeader,
    Home
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
