<template>
  <div>Please wait...</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AuthHandler',
  methods: {
    ...mapActions(['finelizeLogin'])
  },
  created() {
    this.finelizeLogin(window.location.hash)
  }
}
</script>

<style lang="scss" scoped></style>
