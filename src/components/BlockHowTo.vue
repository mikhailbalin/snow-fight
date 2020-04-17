<template>
  <section class="px-6 py-12 my-md-2 my-lg-10 text-center" id="how-to-play">
    <v-container>
      <v-row class="mb-12">
        <v-col lg="8" offset-lg="2" xl="6" offset-xl="3">
          <h2 class="mb-2">{{ title }}</h2>
          <p class="mb-0">{{ text }}</p>
        </v-col>
      </v-row>

      <v-row class="mb-12">
        <v-col
          v-for="(stat, idx) in stats"
          :key="idx"
          sm="6"
          md="3"
          xl="2"
          :offset-xl="stat.offset"
          class="pb-10 pb-md-0"
          ><stat-card
            :imgPath="stat.imgPath"
            :numTitle="stat.numTitle"
            :description="stat.description"
        /></v-col>
      </v-row>

      <v-btn
        x-large
        :to="downloadRules.link"
        target="_blank"
        :block="$vuetify.breakpoint.xsOnly"
        color="primary"
      >
        {{ downloadRules.text }}
      </v-btn>
    </v-container>
  </section>
</template>

<script>
import StatCard from '@/components/StatCard.vue';

export default {
  name: 'BlockHowTo',
  components: { StatCard },
  data() {
    return {
      title: 'Как играть?',
      text:
        'Две команды сталкиваются в настоящем снежном бою: закидывают друг друга снежками, не нарушая при этом некоторых правил. Цель — захватить флаг, либо выстоять бой, оставшись в большинстве. Играть может каждый независимо от возраста и уровня подготовки. Наши судьи всему научат!',
      stats: [
        {
          imgPath: require('@/assets/illustrations/players.png'),
          numTitle: 7,
          description: 'игроков в каждой команде',
          offset: '2'
        },
        {
          imgPath: require('@/assets/illustrations/timer.png'),
          numTitle: 3,
          description: 'периода в матче'
        },
        {
          imgPath: require('@/assets/illustrations/scoreboard.png'),
          numTitle: 3,
          description: 'минуты длится период'
        },
        {
          imgPath: require('@/assets/illustrations/snowballs.png'),
          numTitle: 90,
          description: 'снежков можно использовать в каждом периоде'
        }
      ],
      downloadRules: {
        text: 'Скачать правила',
        link: 'yukigassen_rules.pdf'
      }
    };
  }
};
</script>
