<template>
  <div>
    <img
      v-for="(image, idx) in allImages"
      :key="idx"
      :src="image.link"
      style="width: 50%; margin-left: 50px;"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ImageList',
  methods: {
    ...mapActions(['fetchImages'])
  },
  created() {
    this.fetchImages()
  },
  computed: {
    ...mapGetters(['allImages'])
  }
}
</script>

<style scoped></style>
