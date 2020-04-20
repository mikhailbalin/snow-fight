<template>
  <v-app>
    <app-drawer />
    <app-header></app-header>
    <v-content class="grey--text text--darken-1">
      <router-view />
    </v-content>
    <app-footer />

    <v-snackbar
      v-model="notification.visible"
      :timeout="6000"
      :color="notification.type === 'success' ? 'green' : 'red'"
      @input="clearNotification"
    >
      {{ notification.msg }}
      <v-btn dark text @click="clearNotification">
        Закрыть
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppDrawer from '@/components/AppDrawer.vue';

export default {
  name: 'AppLayout',

  components: {
    AppHeader,
    AppFooter,
    AppDrawer
  },

  computed: mapState(['notification']),

  methods: mapActions(['clearNotification'])
};
</script>
