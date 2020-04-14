<template>
  <div>
    <v-container>
      <h2>Как играть?</h2>

      <p>
        Две команды сталкиваются в настоящем снежном бою: закидывают друг друга
        снежками, не нарушая при этом некоторых правил. Цель — захватить флаг,
        либо выстоять бой, оставшись в большинстве. Играть может каждый
        независимо от возраста и уровня подготовки. Наши судьи всему научат!
      </p>

      <v-row>
        <v-col :cols="3" v-for="(stat, idx) in stats" :key="idx"
          ><stat-card
            :imgPath="stat.imgPath"
            :numTitle="stat.numTitle"
            :description="stat.description"
        /></v-col>
      </v-row>

      <v-btn large color="primary">Скачать правила</v-btn>
    </v-container>
  </div>
</template>

<script>
import StatCard from '@/components/StatCard.vue';

export default {
  name: 'BlockHowTo',
  components: { StatCard },
  data() {
    return {
      stats: [
        {
          imgPath: require('@/assets/illustrations/players.png'),
          numTitle: 7,
          description: 'игроков в каждой команде'
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
      ]
    };
  }
};
</script>

<style scoped></style>
