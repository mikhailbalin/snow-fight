<template>
  <v-carousel cycle height="80vh" :show-arrows="false">
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
      <!-- <v-sheet tile height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="https://picsum.photos/510/300?random" />
        </v-row>
      </v-sheet> -->
    </v-carousel-item>
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
