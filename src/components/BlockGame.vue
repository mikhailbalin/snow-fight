<template>
  <section class="px-6 py-12 my-md-2 my-lg-10" id="what-is-this">
    <v-container>
      <v-row align="center">
        <v-col sm="6" xl="4" offset-xl="2" class="d-none d-sm-block">
          <v-img
            :src="require('@/assets/illustrations/players-fight.png')"
            max-height="400"
            contain
          ></v-img>
        </v-col>

        <v-col sm="6" xl="4" class="text-center text-sm-left">
          <h2 class="mb-2">{{ title }}</h2>
          <p class="mb-0">
            <strong class="text-uppercase">Юкигассен</strong> — {{ text }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockGame',
  data: () => ({
    title: 'Что это?',
    text:
      'это зимняя командная игра, зрелищная и азартная, которая зародилась в Японии около 20 лет назад, стала популярной в других снежных странах и наконец пришла к нам в Санкт-Петербург.'
  })
};
</script>
