<template>
  <v-app>
    <app-side-nav />
    <app-header></app-header>
    <v-content class="grey--text text--darken-1">
      <router-view />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppSideNav from '@/components/AppSideNav.vue';

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
    AppSideNav
  }
};
</script>
