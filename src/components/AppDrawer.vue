<template>
  <v-navigation-drawer
    :value="sideNav.sideNavOpen"
    fixed
    temporary
    bottom
    @input="closeSideNav"
  >
    <app-navigation vertical />
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppNavigation from '@/components/AppNavigation.vue';

export default {
  name: 'AppSideNav',
  components: { AppNavigation },
  computed: mapState(['sideNav']),
  methods: {
    ...mapActions(['toggleSideNav']),

    closeSideNav(isClosed) {
      if (!isClosed) this.toggleSideNav();
    },
  },
};
</script>

<style lang="scss" scoped></style>
