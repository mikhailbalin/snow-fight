<template>
  <section class="px-sm-6 py-12 text-center">
    <v-container class="my-md-2 my-lg-10">
      <h2 class="mb-12">{{ title }}</h2>

      <v-row class="text-left">
        <v-col
          class="py-0"
          cols="12"
          md="6"
          v-for="(faqCol, idx) in faqCols"
          :key="idx"
        >
          <v-expansion-panels multiple flat>
            <v-expansion-panel
              v-for="(item, i) in faqCol"
              :key="i"
              active-class="app-panel-expanded"
            >
              <v-expansion-panel-header class="d-flex">
                <div class="app-panel-title order-2 grey--text text--darken-1">
                  {{ item.title }}
                </div>
                <template #actions>
                  <font-awesome-icon
                    class="mr-3 app-faq-icon"
                    :icon="['fas', 'chevron-down']"
                  />
                </template>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <div class="grey--text text--darken-1 pl-7">
                  {{ item.description }}
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <p class="px-6 px-md-0 mt-12">
        Не нашли ответа на интересующий вас вопрос? Пожалуйста,
        <router-link :to="{ name: 'Questions' }">
          посмотрите все вопросы</router-link
        >.
      </p>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockFaq',
  data: () => ({
    title: 'Часто задаваемые вопросы',
    faqCols: [
      [
        {
          title: 'Где можно поиграть в Юкигассен?',
          description:
            'Мы можем провести игру в черте города и за его пределами. Площадку выбираете вы!',
        },
        {
          title: 'Когда можно играть в Юкигассен?',
          description:
            'В течение всего зимнего сезона при подходящих условиях, время суток не имеет значения.',
        },
        {
          title: 'Сколько это стоит?',
          description:
            'Для уточнения стоимости, пожалуйста, напишите нам на info@snowfight.ru или воспользуйтесь формой ниже.',
        },
      ],
      [
        {
          title: 'Как одеться? Нужна ли специальная подготовка?',
          description:
            'Никакой особенной подготовки не требуется, для игры подойдет обычная зимняя одежда. Единственное правило — не надевать обувь с шипами.',
        },
        {
          title: 'Подходит ли Юкигассен для детей?',
          description: 'Разумеется, ведь дети так любят играть в снежки!',
        },
        {
          title: 'Есть ли возрастные ограничения для игры?',
          description: '12+',
        },
      ],
    ],
  }),
};
</script>

<style scoped lang="scss">
.app-faq-icon {
  transform: rotate(-90deg);
  transition: transform 250ms;
  path {
    fill: #f4b171;
  }
}

.app-panel-title {
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.3;
}

.app-panel-expanded {
  .app-faq-icon {
    transform: rotate(0deg);
  }
}
</style>
