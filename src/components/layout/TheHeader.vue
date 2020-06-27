<template>
  <v-app-bar class="grey lighten-5 px-sm-4" app hide-on-scroll fixed flat>
    <v-toolbar-title>
      <router-link :to="{ name: 'Home' }">
        <app-logo />
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <nav class="d-none d-md-block">
      <app-navigation />
    </nav>

    <v-btn icon color="primary" class="d-md-none" @click="openSideNav">
      <font-awesome-icon class="app-bar-nav-btn" :icon="['fas', 'bars']" />
    </v-btn>

    <logo-big />
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
import AppLogo from '@/components/AppLogo.vue';
import AppNavigation from '@/components/AppNavigation.vue';
import LogoBig from '@/components/svg/LogoBig.svg?inline';

console.log(LogoBig);

export default {
  name: 'TheHeader',
  components: { AppLogo, AppNavigation, LogoBig },
  methods: {
    ...mapActions(['toggleSideNav']),

    openSideNav() {
      this.toggleSideNav();
    }
  }
};
</script>

<style scoped lang="scss">
.app-bar-nav-btn {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
