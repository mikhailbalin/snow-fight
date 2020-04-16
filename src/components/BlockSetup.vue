<template>
  <section class="px-6 py-12 my-md-2 my-lg-10" id="setup">
    <v-container>
      <v-row align="center">
        <v-col class="d-block d-sm-none text-center">
          <h2>{{ space.title }}</h2>
        </v-col>

        <v-col sm="6" lg="5" offset-lg="1" xl="4" order-sm="2">
          <v-img :src="require('@/assets/illustrations/court.png')" />
        </v-col>

        <v-col sm="6" xl="4" offset-xl="2" order-sm="1" class="text-left">
          <h2 class="d-none d-sm-block mb-2">{{ space.title }}</h2>
          <p>{{ space.text }}</p>
        </v-col>
      </v-row>

      <v-row class="mt-10" align="center">
        <v-col class="d-block d-sm-none text-center">
          <h2>{{ equipment.title }}</h2>
        </v-col>

        <v-col sm="6" lg="5" xl="4" offset-xl="1">
          <v-img :src="require('@/assets/illustrations/equipment.png')" />
        </v-col>

        <v-col sm="6" offset-lg="1" xl="4" class="text-left">
          <h2 class="d-none d-sm-block mb-2">{{ equipment.title }}</h2>
          <p>{{ equipment.text }}</p>
          <ul>
            <li v-for="(item, idx) in equipment.list" :key="idx">
              {{ item }}
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-row class="mt-10 pb-12" align="center">
        <v-col class="d-block d-sm-none text-center">
          <h2>{{ snowballs.title }}</h2>
        </v-col>

        <v-col sm="6" lg="5" offset-lg="1" xl="4" order-sm="2">
          <v-img :src="require('@/assets/illustrations/snowball-maker.png')" />
        </v-col>

        <v-col sm="6" xl="4" offset-xl="2" order-sm="1" class="text-left">
          <h2 class="d-none d-sm-block mb-2">{{ snowballs.title }}</h2>
          <p>{{ snowballs.text }}</p>
        </v-col>
      </v-row>

      <v-divider class="my-0 my-sm-12 grey lighten-1" />

      <v-row align="center" class="pt-12">
        <v-col class="d-block d-sm-none text-center">
          <strong>{{ tournment.subtitle }}</strong>
          <h2>{{ tournment.title }}</h2>
        </v-col>

        <v-col sm="6" lg="5" xl="4" offset-xl="1">
          <v-img :src="require('@/assets/illustrations/stuff.png')" />
        </v-col>

        <v-col sm="6" offset-lg="1" xl="4" class="text-left">
          <div class="d-none d-sm-block">
            <strong>{{ tournment.subtitle }}</strong>
            <h2 class="mb-2">{{ tournment.title }}</h2>
          </div>
          <p>{{ tournment.text }}</p>
          <ul>
            <li v-for="(item, idx) in tournment.list" :key="idx">
              {{ item }}
            </li>
          </ul>
          <p>
            Напишите нам на почту info@snowfight.ru или воспользуйтесь формой
            для сообщений и мы обсудим ваш оригинальный выходной.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockSetup',
  data: () => ({
    space: {
      title: 'Площадка',
      text:
        'Для игры требуется площадка длиной 36м и шириной 10м. Мы построим корт на вашей территории, либо предложим свою — в черте города или за его пределами.'
    },
    equipment: {
      title: 'Снаряжение',
      text: 'Мы предоставим все необходимое для игры двух и более команд:',
      list: [
        'Шлемы, разработанные в Японии специально для спортивных соревнований Юкигассен',
        'Спортивные майки с номерами',
        'Прессы для снежков'
      ]
    },
    snowballs: {
      title: 'Снежки',
      text:
        'Как слепить столько снежков за один раз? С помощью специальных прессов! А на случай действительно холодной погоды у нас есть тепловые пушки и тенты.'
    },
    tournment: {
      subtitle: 'Групповые соревнования',
      title:
        'Вы собираетесь поиграть в Юкигассен большой компанией, с коллегами?',
      text: 'Дополнительно мы предлагаем:',
      list: [
        'Услуги DJ и ведущего, профессионального оператора',
        'Кейтеринг и бары с напитками и едой',
        'Освещение для ночных соревнований',
        'Кубки для победителей'
      ]
    }
  })
};
</script>

<style lang="scss" scoped></style>
