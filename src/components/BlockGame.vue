<template>
  <div>
    <v-container>
      <v-row align="center">
        <v-col cols="6">
          <v-img
            :src="require('@/assets/illustrations/players-fight.png')"
          ></v-img>
        </v-col>

        <v-col cols="6">
          <h2>Что это?</h2>
          <p>
            ЮКИГАССЕН — это зимняя командная игра, зрелищная и азартная, которая
            зародилась в Японии около 20 лет назад, стала популярной в других
            снежных странах и наконец пришла к нам в Санкт-Петербург.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BlockGame'
};
</script>

<style scoped></style>
