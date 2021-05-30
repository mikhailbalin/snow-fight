<template>
  <v-footer color="#252830" dark>
    <v-container class="my-2 my-10">
      <v-row>
        <v-col class="px-8 px-md-4" cols="12" md="5">
          <div class="mb-4 text-uppercase font-weight-bold">О нас</div>
          <p>
            Снежные бои Юкигассен проводит команда специалистов, которые возьмут
            на себя весь организационный процесс, а опытные судьи проследят за
            выполнением правил игры и соблюдением техники безопасности.
          </p>
        </v-col>

        <v-col cols="12" sm="6" md="3" offset-md="1">
          <div class="pl-4 mb-4 text-uppercase font-weight-bold">
            Информация
          </div>
          <div class="d-flex flex-column align-start">
            <v-btn class="flex-grow-0" :to="{ name: 'Questions' }" text>
              Вопросы
            </v-btn>
            <v-btn :to="{ name: 'Contacts' }" text>Контакты</v-btn>
            <v-btn :to="{ name: 'Jobs' }" text>Работа у нас</v-btn>
            <v-btn :to="{ name: 'Privacy' }" text>Конфиденциальность</v-btn>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <div class="pl-4 mb-4 text-uppercase font-weight-bold">
            Следите за нами
          </div>

          <v-btn
            icon
            x-large
            v-for="(item, idx) in socialIcons"
            target="_blank"
            :href="item.link"
            :key="idx"
            :color="item.color"
            text
            class="white--text mx-2"
            rel="noopener"
          >
            <font-awesome-icon
              size="2x"
              :icon="['fab', item.icon]"
              :style="{ color: item.color }"
            />
          </v-btn>
        </v-col>
      </v-row>

      <div class="px-4 px-md-0">
        <v-divider class="mt-2 mb-6" />
        &copy; {{ new Date().getFullYear() }} Cнежный бой
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    socialIcons: [
      {
        icon: 'twitter',
        color: '#1DA1F2',
        link: 'https://twitter.com/snowfightrussia',
      },
      {
        icon: 'facebook',
        color: '#4267B2',
        link: 'https://facebook.com/snowfightrussia',
      },
      {
        icon: 'instagram',
        color: '#E1306C',
        link: 'https://www.instagram.com/snowfightrussia',
      },
    ],
  }),
};
</script>
