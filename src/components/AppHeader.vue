<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login 🍕</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style lang="scss" scoped></style>
