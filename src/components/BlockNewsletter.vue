<template>
  <section class="grey lighten-5 py-6 px-6 text-sm-center">
    <v-container>
      <h2 class="mb-8">Будте в курсе последних событий!</h2>

      <v-form v-model="formValidity">
        <v-row>
          <v-col col="12" sm="4" offset="2">
            <v-text-field
              label="Почта"
              type="email"
              placeholder="example@mail.ru"
              outlined
              dense
              height="44"
              :rules="emailRules"
              v-model="email"
              required
            />
          </v-col>

          <v-col class="text-left" col="12" sm="6">
            <v-btn
              large
              type="submit"
              color="primary"
              :disabled="!formValidity"
            >
              Подписаться на новости
            </v-btn>
          </v-col>
        </v-row>
      </v-form>

      <small
        >Никакого спама, обещаем!
        <router-link :to="{ name: 'Privacy' }"
          >Конфиденциальность</router-link
        ></small
      >
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  data: () => ({
    email: '',
    emailRules: [
      value => !!value || 'Введите вашу почту.',
      value => value.indexOf('@') !== 0 || 'Email should have a username.',
      value => value.includes('@') || 'Email should include @ symbol.',
      value =>
        value.indexOf('.') - value.indexOf('@') > 1 ||
        'Email shuold contain a valid domain.',
      value =>
        value.indexOf('.') <= value.length - 3 ||
        'Email should contain a valid domain extension.'
    ],
    formValidity: false
  })
};
</script>
