<template>
  <section class="px-sm-6 py-12 grey lighten-5 text-center" id="prices">
    <v-container class="my-md-2 my-lg-10">
      <h2 class="mb-12">{{ title }}</h2>

      <v-row>
        <v-col cols="12" md="4" v-for="(item, idx) in prices" :key="idx">
          <div
            class="pa-2 height-full"
            :class="{
              grey: idx !== 1,
              'lighten-4': idx !== 1,
              white: idx === 1,
              'elevation-10': idx === 1
            }"
          >
            <v-card flat outlined class="height-full">
              <div
                v-if="item.сonditions"
                class="pa-6 pb-12"
                :class="{ grey: idx === 1, 'lighten-4': idx === 1 }"
              >
                <h3 class="font-weight-bold mb-8 grey--text app-price-caption">
                  {{ item.title }}
                </h3>

                <div class="d-flex align-center justify-center">
                  <h3 class="display-2 font-weight-black mb-0">
                    <sup><small>₽</small></sup
                    >{{ item.price }}
                  </h3>

                  <div
                    class="text-left ml-4 body-2 font-weight-bold mt-1 text-uppercase"
                  >
                    за
                    <v-divider class="app-divider primary" />
                    {{ item.for }}
                  </div>
                </div>
              </div>

              <div
                class="px-8 pt-8 pb-12 d-block"
                :class="{
                  'height-full': !item.сonditions,
                  'd-sm-flex': !item.сonditions,
                  'align-center': !item.сonditions
                }"
              >
                <div v-if="item.сonditions">
                  <div v-for="(сondition, idx) in item.сonditions" :key="idx">
                    <p
                      class="my-3"
                      :class="{
                        'mt-0': idx === 0,
                        'mb-0': idx === item.сonditions.length - 1
                      }"
                      v-html="сondition"
                    />
                    <v-divider
                      v-if="idx < item.сonditions.length - 1"
                      class="grey lighten-2"
                    />
                  </div>
                </div>

                <div v-else>
                  <h3
                    class="font-weight-bold mb-8 grey--text app-price-caption"
                  >
                    {{ item.title }}
                  </h3>
                  <p class="mb-0">
                    Чтобы получить полную информацию по ценам для вашего
                    мероприятия, пожалуйста
                    <br />
                    <v-btn class="primary mt-4" :to="{ name: 'Contacts' }">
                      напишите <span class="d-none d-sm-inline">нам</span>
                    </v-btn>
                  </p>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <div class="grey--text text--lighten-1 mt-12 px-6 px-sm-0">
        <sup>1</sup>Если команды набрали одинаковое количество очков, игроки
        будут должны совершить по броску в мишень до выявления победителя. См.
        правила.
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
        price: '350',
        for: 'игрока',
        сonditions: [
          'Каждый игрок сыграет по 2 матча.',
          'При ничье побелитель будет выявлен по очкам или Броскам победы<sup>1</sup>'
        ]
      },
      {
        title: 'Игры на вашей площадке',
        price: '10k',
        for: 'площадку',
        сonditions: [
          'Применяются те же правила, что и для сборных команд.',
          'Каждая дополнительная игра - 150 руб. / один игрок.'
        ]
      },
      {
        title: 'Групповые соревнования'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.app-divider {
  border-top-width: 3px;
  max-width: 1.75rem;
}

.app-price-caption {
  font-size: 0.875rem;
}
</style>
