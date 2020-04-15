<template>
  <v-footer dark padless>
    <v-container>
      <v-row>
        <v-col col="6">
          <div>О нас</div>
          <p>
            Снежные бои Юкигассен проводит команда специалистов, которые возьмут
            на себя весь организационный процесс, а опытные судьи проследят за
            выполнением правил игры и соблюдением техники безопасности.
          </p>
        </v-col>
        <v-col col="3">
          <div>Информация</div>
          <v-btn :to="{ name: 'Questions' }" text>Вопросы</v-btn>
          <v-btn :to="{ name: 'Jobs' }" text>Работа у нас</v-btn>
          <v-btn :to="{ name: 'Contacts' }" text>Контакты</v-btn>
          <v-btn :to="{ name: 'Privacy' }" text>Конфиденциальность</v-btn>
        </v-col>
        <v-col col="3">
          <div>Следите за нами</div>
          <v-btn
            v-for="(social, idx) in socials"
            :key="idx"
            :color="social.color"
            text
            class="white--text"
          >
            <font-awesome-icon :icon="['fab', social.icon]" />
          </v-btn>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    socials: [
      {
        icon: 'twitter',
        color: 'indigo'
      },
      {
        icon: 'facebook',
        color: 'cyan darken-1'
      },
      {
        icon: 'instagram',
        color: 'red lighten-3'
      }
    ]
  })
};
</script>

<style scoped></style>
