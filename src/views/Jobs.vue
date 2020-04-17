<template>
  <div class="fill-height">
    <app-banner title="Работа у нас" />

    <v-sheet tile color="grey lighten-5 fill-height grey--text text--darken-1">
      <v-container class="px-8">
        <v-row>
          Hello, world! I'm a simple v-sheet
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import AppBanner from '@/components/AppBanner.vue';

export default {
  name: 'Jobs',
  components: { AppBanner }
};
</script>
