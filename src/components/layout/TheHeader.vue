<template>
  <v-app-bar class="grey lighten-5 px-sm-4" app hide-on-scroll fixed>
    <v-toolbar-title>
      <router-link :to="{ name: 'Home' }">
        <app-logo />
      </router-link>
    </v-toolbar-title>

    <nav class="d-none d-md-block">
      <app-navigation />
    </nav>

    <v-spacer></v-spacer>

    <v-btn icon color="primary" class="d-md-none" @click="openSideNav">
      <font-awesome-icon class="app-bar-nav-btn" :icon="['fas', 'bars']" />
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
import AppLogo from '@/components/AppLogo.vue';
import AppNavigation from '@/components/AppNavigation.vue';

export default {
  name: 'TheHeader',
  components: { AppLogo, AppNavigation },
  methods: {
    ...mapActions(['toggleSideNav']),

    openSideNav() {
      this.toggleSideNav();
    },
  },
};
</script>

<style scoped lang="scss">
.app-bar-nav-btn {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
