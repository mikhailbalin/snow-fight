<template>
  <div :class="['d-flex', { 'flex-column': vertical, 'pa-8': vertical }]">
    <v-btn
      :class="[
        'grey--text',
        'text--darken-2',
        'font-weight-bold',
        { 'mb-4': vertical }
      ]"
      to="/#what-is-this"
      text
      >Что это?</v-btn
    >

    <v-btn
      :class="[
        'grey--text',
        'text--darken-2',
        'font-weight-bold',
        { 'mb-4': vertical }
      ]"
      to="/#how-to-play"
      text
      >Как играть?</v-btn
    >

    <v-btn
      :class="[
        'grey--text',
        'text--darken-2',
        'font-weight-bold',
        { 'mb-4': vertical }
      ]"
      to="/#setup"
      text
      >Организация</v-btn
    >

    <v-btn
      :class="[
        'grey--text',
        'text--darken-2',
        'font-weight-bold',
        { 'mb-4': vertical }
      ]"
      to="/#prices"
      text
      >Цены</v-btn
    >

    <v-btn
      :class="[
        'grey--text',
        'text--darken-2',
        'font-weight-bold',
        { 'mb-4': vertical }
      ]"
      :to="{ name: 'Questions' }"
      text
      >Вопросы</v-btn
    >

    <v-btn
      :class="[
        'grey--text',
        'text--darken-2',
        'font-weight-bold',
        { 'mb-4': vertical }
      ]"
      :to="{ name: 'Contacts' }"
      text
      >Контакты</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'AppNavigation',
  props: {
    vertical: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped></style>
