<template>
  <section class="px-6 py-12 primary white--text text-center text-md-left">
    <v-container class="my-md-2 my-lg-10">
      <v-row align="center">
        <v-col cols="12" md="6" class="">
          <strong class="app-subtitle white--text">Чемпионат</strong>

          <h2 class="mb-2">Битва между отелями</h2>

          <p class="mb-0 px-sm-9 px-md-0">
            Зимний чемпионат в горнолыжном комплексе Охта-Парк с командами
            отелей Санкт-Петербурга.
          </p>

          <v-row class="d-none d-sm-flex px-sm-9 px-md-0">
            <v-col col="3" v-for="(stat, idx) in stats" :key="idx">
              <stat-card
                :numTitle="stat.title"
                :description="stat.description"
              />
            </v-col>
          </v-row>

          <v-btn
            large
            outlined
            :href="fbLink"
            target="_blank"
            class="mt-6 d-none d-md-inline-flex"
            color="white"
          >
            <font-awesome-icon class="mr-3" :icon="['fab', 'facebook']" />
            <span class="d-inline-block text-truncate app-fb-link">
              {{ fbLink.slice(12) }}
            </span>
          </v-btn>
        </v-col>

        <v-col cols="12" md="6">
          <div class="embed-wrapper">
            <iframe
              class="embed"
              :src="videoSrc"
              width="1280"
              height="720"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>

          <v-btn
            large
            outlined
            :href="fbLink"
            target="_blank"
            class="mt-6 d-inline-flex d-md-none"
            color="white"
            rel="noopener"
          >
            <font-awesome-icon class="mr-3" :icon="['fab', 'facebook']" />
            <span class="d-inline-block text-truncate app-fb-link">
              {{ fbLink.slice(12) }}
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import StatCard from '@/components/StatCard.vue';

export default {
  name: 'BlockVideo',
  components: { StatCard },
  data() {
    return {
      videoSrc:
        'https://player.vimeo.com/video/153114564?loop=1&color=E77460&title=0&byline=0&portrait=0',
      fbLink: 'https://www.facebook.com/snowfightrussia/videos/606038066164038',
      stats: [
        {
          title: 11,
          description: 'матчей'
        },
        {
          title: 9,
          description: 'команд'
        },
        {
          title: 4500,
          description: 'снежков'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.embed-wrapper {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
}

.embed {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 0;
}

.app-fb-link {
  max-width: 150px;
}

@media #{map-get($display-breakpoints, 'sm-and-up')} {
  .app-fb-link {
    max-width: 300px;
  }
}
</style>
