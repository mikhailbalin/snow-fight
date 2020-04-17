<template>
  <v-container>
    <v-sheet
      class="text-center d-flex align-center justify-center grey--text text--darken-1"
      min-height="200px"
    >
      <v-row class="fill-height">
        <v-col cols="12">
          <h1>{{ title }}</h1>
          <p class="mb-0">{{ text }}</p>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: 'AppBanner',
  props: {
    title: {
      type: String,
      required: true
    },
    text: String
  }
};
</script>

<style lang="scss" scoped></style>
