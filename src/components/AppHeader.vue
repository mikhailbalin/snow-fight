<template>
  <v-app-bar class="grey lighten-5 px-4" app hide-on-scroll fixed>
    <v-toolbar-title><app-logo /></v-toolbar-title>

    <nav>
      <v-btn to="/#what-is-this" text>Что это?</v-btn>
      <v-btn to="/#how-to-play" text>Как играть?</v-btn>
      <v-btn to="/#setup" text>Организация</v-btn>
      <v-btn to="/#prices" text>Цены</v-btn>
      <v-btn :to="{ name: 'Questions' }" text>Вопросы</v-btn>
      <v-btn :to="{ name: 'Contacts' }" text>Контакты</v-btn>
    </nav>

    <v-spacer></v-spacer>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  </v-app-bar>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';

export default {
  name: 'AppHeader',
  components: { AppLogo }
};
</script>

<style scoped></style>
