<template>
  <v-carousel
    cycle
    height="50vh"
    :show-arrows="false"
    hide-delimiter-background
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" />
  </v-carousel>
</template>

<script>
export default {
  name: 'BlockSlider',
  data() {
    return {
      slides: [
        { src: '/images/carousel-1.jpg' },
        { src: '/images/carousel-2.jpg' },
        { src: '/images/carousel-3.jpg' }
      ]
    };
  }
};
</script>

<style scoped></style>
