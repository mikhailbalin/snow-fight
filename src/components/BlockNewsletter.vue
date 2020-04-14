<template>
  <div>
    <v-container>
      <h2>Будте в курсе последних событий!</h2>
      <small>
        Никакого спама, обещаем!
        <router-link :to="{ name: 'Privacy' }">Конфиденциальность</router-link>
      </small>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Newsletter'
};
</script>

<style scoped></style>
