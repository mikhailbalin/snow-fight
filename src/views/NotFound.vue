<template>
  <v-sheet
    class="
      text-center
      d-flex
      align-center
      justify-center
      grey--text
      text--darken-1
    "
    min-height="80vh"
  >
    <v-container class="px-8">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-img
            max-height="250"
            contain
            :src="require('@/assets/illustrations/poop.png')"
          />
        </v-col>

        <v-col cols="12">
          <h1 class="mb-5">Такой страницы нет :(</h1>
          <p>
            Но есть хорошие другие. Например, можно начать с
            <v-btn small :to="{ name: 'Home' }" color="primary">
              Главной
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>
