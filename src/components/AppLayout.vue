<template>
  <v-app>
    <app-drawer />
    <app-header></app-header>
    <v-content class="grey--text text--darken-1">
      <router-view />
    </v-content>
    <app-footer />

    <v-snackbar
      v-model="snackbar.visible"
      :timeout="6000"
      :color="snackbar.state === 'success' ? 'green' : 'red'"
    >
      {{ snackbar.text }}
      <v-btn dark text @click="snackbar.visible = false">
        Закрыть
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
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

  data() {
    return {
      snackbar: {
        visible: false,
        text: '',
        state: 'success'
      }
    };
  }
};
</script>
