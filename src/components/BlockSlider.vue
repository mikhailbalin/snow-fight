<template>
  <v-carousel cycle height="80vh" hide-delimiters>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet tile height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'BlockSlider',
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    };
  }
};
</script>

<style scoped></style>
