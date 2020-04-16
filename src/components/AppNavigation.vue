<template>
  <div>
    <v-btn to="/#what-is-this" text>Что это?</v-btn>
    <v-btn to="/#how-to-play" text>Как играть?</v-btn>
    <v-btn to="/#setup" text>Организация</v-btn>
    <v-btn to="/#prices" text>Цены</v-btn>
    <v-btn :to="{ name: 'Questions' }" text>Вопросы</v-btn>
    <v-btn :to="{ name: 'Contacts' }" text>Контакты</v-btn>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
};
</script>

<style lang="scss" scoped></style>
