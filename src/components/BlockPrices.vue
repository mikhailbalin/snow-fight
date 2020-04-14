<template>
  <v-container>
    <v-row justify="space-between">
      <v-col>
        <v-card class="d-inline-block mx-auto">
          <div class="overline mb-4">Игры по расписанию</div>
          <p class="display-1 text--primary">350 руб. / один игрок</p>
          <div class="text--primary">
            Каждый игрок сыграет по 2 матча. При ничье побелитель будет выявлен
            по очкам или Броскам победы1. Каждая дополнительная игра 150 руб. /
            один игрок.
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="d-inline-block mx-auto">
          <div class="overline mb-4">Игры по расписанию</div>
          <p class="display-1 text--primary">
            350 руб. / один игрок + 10000 руб. / одна площалка
          </p>
          <div class="text--primary">
            Применяются те же правила, что и для сборных команд. Каждая
            дополнительная игра 150 руб./один игрок.
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="d-inline-block mx-auto">
          <div class="overline mb-4">Игры по расписанию</div>
          <div class="text--primary">
            Чтобы получить полную информацию по ценам для вашего мероприятия,
            пожалуйста свяжитесь с нами.
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div>
      1 Если команды набрали одинаковое количество очков, игроки будут должны
      совершить по броску в мишень до выявления победителя. См. правила.
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'BlockPrices'
};
</script>

<style lang="scss" scoped></style>
