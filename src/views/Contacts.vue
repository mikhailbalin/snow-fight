<template>
  <div class="fill-height">
    <app-banner title="Контакты" />

    <v-sheet tile color="grey lighten-5 fill-height grey--text text--darken-1">
      <v-container class="px-8 py-12">
        <v-row>
          <!-- md="8" offset-md="2" lg="8" offset-lg="2" -->
          <v-col cols="12">
            <address class="app-address mb-6">
              <strong class="mb-2">Снежный бой Юкигассен</strong><br />
              Ленинградская область<br />
              Всеволожский район, дер. Сярьги
            </address>

            <address class="app-address">
              <strong class="mb-2">Позвонить</strong><br />
              <abbr title="Телефон">Т:</abbr>
              <a :href="`tel:${tel}`">{{ ' ' + tel }}</a
              ><br />
              <small class="text--disabled"
                >Ежедневно с 09:00 до 22:30 МСК</small
              >
            </address>
          </v-col>

          <v-col cols="12"> </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import AppBanner from '@/components/AppBanner.vue';
import { mapState } from 'vuex';

export default {
  name: 'Contacts',
  components: { AppBanner },
  computed: mapState(['tel'])
};
</script>

<style lang="scss" scoped>
.app-address {
  font-style: normal;
}
</style>
