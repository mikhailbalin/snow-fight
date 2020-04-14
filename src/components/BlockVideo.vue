<template>
  <div class="block">
    <v-container>
      <v-row>
        <v-col col="6">
          <strong>Чемпионат</strong>
          <h2>Битва между отелями</h2>
          <p>
            Зимний чемпионат в горнолыжном комплексе Охта-Парк с командами
            отелей Санкт-Петербурга.
          </p>
          <v-row>
            <v-col col="3" v-for="(stat, idx) in stats" :key="idx">
              <stat-card
                :numTitle="stat.title"
                :description="stat.description"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col col="6">
          <div class="embed-wrapper">
            <iframe
              class="embed"
              src="https://player.vimeo.com/video/153114564?loop=1&color=E77460&title=0&byline=0&portrait=0"
              width="1280"
              height="720"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StatCard from '@/components/StatCard.vue';

export default {
  name: 'BlockVideo',
  components: { StatCard },
  data() {
    return {
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

<style scoped>
.block {
  background-color: #4688f1;
}

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
</style>
