<template>
  <div>
    <v-container>
      <h2>Часто задаваемые вопросы</h2>

      <v-expansion-panels :multiple="true" :flat="true">
        <v-row>
          <v-col col="6" v-for="(faqCol, idx) in faqCols" :key="idx">
            <v-expansion-panel v-for="(item, i) in faqCol" :key="i">
              <v-expansion-panel-header>
                {{ item.title }}
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                {{ item.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-col>
        </v-row>
      </v-expansion-panels>

      <p>
        Не нашли ответа на интересующий вас вопрос? Пожалуйста, посмотрите все
        вопросы.
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BlockFaq',
  data: () => ({
    faqCols: [
      [
        {
          title: 'Где можно поиграть в Юкигассен?',
          description:
            'Мы можем провести игру в черте города и за его пределами. Площадку выбираете вы!'
        },
        {
          title: 'Когда можно играть в Юкигассен?',
          description:
            'В течение всего зимнего сезона при подходящих условиях, время суток не имеет значения.'
        },
        {
          title: 'Сколько это стоит?',
          description:
            'Для уточнения стоимости, пожалуйста, напишите нам на info@snowfight.ru или воспользуйтесь формой ниже.'
        }
      ],
      [
        {
          title: 'Как одеться? Нужна ли специальная подготовка?',
          description:
            'Никакой особенной подготовки не требуется, для игры подойдет обычная зимняя одежда. Единственное правило — не надевать обувь с шипами.'
        },
        {
          title: 'Подходит ли Юкигассен для детей?',
          description: 'Разумеется, ведь дети так любят играть в снежки!'
        },
        {
          title: 'Есть ли возрастные ограничения для игры?',
          description: '12+'
        }
      ]
    ]
  })
};
</script>

<style scoped></style>
