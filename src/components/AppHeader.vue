<template>
  <v-app-bar color="accent-4" app hide-on-scroll fixed>
    <v-toolbar-title>Page title</v-toolbar-title>

    <nav>
      <router-link :to="{ name: 'Home' }">Что это?</router-link>|
      <router-link :to="{ name: 'Contacts' }">Как играть?</router-link>|
      <router-link :to="{ name: 'Questions' }">Организация</router-link>|
      <router-link :to="{ name: 'Questions' }">Цены</router-link>|
      <router-link :to="{ name: 'Questions' }">Вопросы</router-link>|
      <router-link :to="{ name: 'Contacts' }">Контакты</router-link>|
    </nav>

    <v-spacer></v-spacer>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped></style>
