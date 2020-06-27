<template>
  <section class="banner grey lighten-5 pt-4 pb-6">
    <font-awesome-icon
      class="banner-decoration primary--text text--lighten-1"
      :icon="['fas', 'plus']"
    />

    <v-container>
      <v-row align="center">
        <v-col class="text-center" cols="12" sm="6">
          <h1>Играйте в снежки по правилам!</h1>
        </v-col>

        <v-col cols="12" sm="6">
          <v-responsive :aspect-ratio="1">
            <v-img
              v-for="i in images"
              :key="i.id"
              :width="i.width"
              :height="i.height"
              :src="i.src"
              aspect-ratio="1"
              :class="['banner-image', `-${i.id}`]"
            />
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>

    <font-awesome-icon
      class="banner-decoration primary--text text--lighten-1"
      :icon="['fas', 'plus']"
    />
  </section>
</template>

<script>
export default {
  name: 'BlockSlider',
  data() {
    const getPath = imgName => `/img/carousel-${imgName}.jpg`;

    return {
      images: [
        { id: 'one', width: '44%', height: '44%', src: getPath('1') },
        { id: 'two', width: '33%', height: '33%', src: getPath('2') },
        { id: 'three', width: '25%', height: '25%', src: getPath('3') },
        { id: 'four', width: '62%', height: '62%', src: getPath('1') }
      ],
      decorations: [{ id: 'one' }, { id: 'two' }]
    };
  }
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  border-bottom-left-radius: 100px;

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    border-bottom-left-radius: 350px;
  }

  &-image {
    position: absolute;
    border-radius: 50%;

    &.-one {
      top: 14%;
      left: 0;
    }

    &.-two {
      top: 0;
      right: 20%;
    }

    &.-three {
      left: 4%;
      bottom: 10%;
    }

    &.-four {
      right: 0;
      bottom: 0;
    }
  }

  &-decoration {
    position: absolute;
  }
}
</style>
