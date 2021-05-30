<template>
  <v-app>
    <app-drawer />
    <the-header></the-header>
    <v-content class="grey--text text--darken-1">
      <router-view />
    </v-content>
    <the-footer />

    <v-snackbar
      v-model="notification.visible"
      :timeout="6000"
      :color="notification.type === 'success' ? 'green' : 'red'"
      @input="clearNotification"
    >
      {{ notification.msg }}
      <v-btn dark text @click="clearNotification"> Закрыть </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import AppDrawer from '@/components/AppDrawer.vue';

export default {
  name: 'TheLayout',

  components: {
    TheHeader,
    TheFooter,
    AppDrawer,
  },

  computed: mapState(['notification']),

  methods: mapActions(['clearNotification']),
};
</script>
