<template>
  <section class="px-6 py-12 my-md-2 my-lg-10 grey lighten-5" id="prices">
    <v-container>
      <h2>{{ title }}</h2>

      <v-row justify="space-between">
        <v-col v-for="(item, idx) in prices" :key="idx">
          <v-card class="d-inline-block mx-auto">
            <div class="overline mb-4">{{ item.title }}</div>
            <p v-if="item.price" class="display-1 text--primary">
              {{ item.price }}
            </p>
            <div class="text--primary">{{ item.text }}</div>
          </v-card>
        </v-col>
      </v-row>

      <div>
        1 Если команды набрали одинаковое количество очков, игроки будут должны
        совершить по броску в мишень до выявления победителя. См. правила.
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockPrices',
  data: () => ({
    title: 'Цены',
    prices: [
      {
        title: 'Игры по расписанию',
        price: '350 руб. / один игрок',
        text:
          'Каждый игрок сыграет по 2 матча. При ничье побелитель будет выявлен по очкам или Броскам победы1. Каждая дополнительная игра 150 руб. / один игрок.'
      },
      {
        title: 'Игры по расписанию',
        price: '350 руб. / один игрок + 10000 руб. / одна площалка',
        text:
          'Применяются те же правила, что и для сборных команд. Каждая дополнительная игра 150 руб./один игрок.'
      },
      {
        title: 'Игры по расписанию',
        text:
          'Чтобы получить полную информацию по ценам для вашего мероприятия, пожалуйста свяжитесь с нами.'
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
