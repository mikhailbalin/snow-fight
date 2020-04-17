<template>
  <div class="fill-height">
    <app-banner :title="bannerTitle" :text="bannerText" />

    <v-sheet tile color="grey lighten-5 fill-height grey--text text--darken-1">
      <v-container class="px-8">
        <v-row>
          Hello, world! I'm a simple v-sheet
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import AppBanner from '@/components/AppBanner.vue';

export default {
  name: 'Questions',
  components: { AppBanner },
  data: () => ({
    bannerTitle: 'Вопросы',
    bannerText:
      'Сдесь вы найдете ответы на основные вопросы об игре и ее организации. Если Вы не нашли ответа на Ваш вопрос, пожалуйста позвоните нам или напишите, воспользовавшись формой для сообщений.'
  })
};
</script>
