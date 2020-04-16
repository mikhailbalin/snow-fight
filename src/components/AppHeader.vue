<template>
  <v-app-bar class="grey lighten-5 px-4" app hide-on-scroll fixed>
    <v-toolbar-title>
      <router-link :to="{ name: 'Home' }">
        <app-logo />
      </router-link>
    </v-toolbar-title>

    <nav class="d-none d-md-block">
      <v-btn to="/#what-is-this" text>Что это?</v-btn>
      <v-btn to="/#how-to-play" text>Как играть?</v-btn>
      <v-btn to="/#setup" text>Организация</v-btn>
      <v-btn to="/#prices" text>Цены</v-btn>
      <v-btn :to="{ name: 'Questions' }" text>Вопросы</v-btn>
      <v-btn :to="{ name: 'Contacts' }" text>Контакты</v-btn>
    </nav>

    <v-spacer></v-spacer>

    <v-btn icon color="primary" class="d-md-none">
      <font-awesome-icon class="app-bar-nav-btn" :icon="['fas', 'bars']" />
    </v-btn>
  </v-app-bar>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';

export default {
  name: 'AppHeader',
  components: { AppLogo }
};
</script>

<style scoped lang="scss">
.app-bar-nav-btn {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
