<template>
  <v-container>
    <v-row>
      <v-row align="center">
        <v-col cols="6">
          <h2>Площадка</h2>
          <p>
            Для игры требуется площадка длиной 36м и шириной 10м. Мы построим
            корт на вашей территории, либо предложим свою — в черте города или
            за его пределами.
          </p>
        </v-col>
        <v-col cols="6">
          <v-img :src="require('@/assets/illustrations/court.png')" />
        </v-col>
      </v-row>
    </v-row>

    <v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-img :src="require('@/assets/illustrations/equipment.png')" />
        </v-col>
        <v-col cols="6">
          <h2>Снаряжение</h2>
          <p>Мы предоставим все необходимое для игры двух и более команд:</p>
          <ul>
            <li>
              Шлемы, разработанные в Японии специально для спортивных
              соревнований Юкигассен
            </li>
            <li>Спортивные майки с номерами</li>
            <li>Прессы для снежков</li>
          </ul>
        </v-col>
      </v-row>
    </v-row>

    <v-row>
      <v-row align="center">
        <v-col cols="6">
          <h2>Снежки</h2>
          <p>
            Как слепить столько снежков за один раз? С помощью специальных
            прессов! А на случай действительно холодной погоды у нас есть
            тепловые пушки и тенты.
          </p>
        </v-col>
        <v-col cols="6">
          <v-img :src="require('@/assets/illustrations/snowball-maker.png')" />
        </v-col>
      </v-row>
    </v-row>

    <v-divider></v-divider>

    <v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-img :src="require('@/assets/illustrations/stuff.png')" />
        </v-col>
        <v-col cols="6">
          <strong>ГРУППОВЫЕ СОРЕВНОВАНИЯ</strong>
          <h2>
            Вы собираетесь поиграть в Юкигассен большой компанией, с коллегами?
          </h2>
          <p>Дополнительно мы предлагаем:</p>
          <ul>
            <li>Услуги DJ и ведущего, профессионального оператора</li>
            <li>Кейтеринг и бары с напитками и едой</li>
            <li>Освещение для ночных соревнований</li>
            <li>Кубки для победителей</li>
          </ul>
          <p>
            Напишите нам на почту info@snowfight.ru или воспользуйтесь формой
            для сообщений и мы обсудим ваш оригинальный выходной.
          </p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BlockSetup'
};
</script>

<style lang="scss" scoped></style>
