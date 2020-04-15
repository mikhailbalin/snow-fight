<template>
  <section class="grey lighten-5 py-6 px-6">
    <v-container>
      <h2>Будте в курсе последних событий!</h2>
      <small>
        Никакого спама, обещаем!
        <router-link :to="{ name: 'Privacy' }">Конфиденциальность</router-link>
      </small>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Newsletter'
};
</script>
