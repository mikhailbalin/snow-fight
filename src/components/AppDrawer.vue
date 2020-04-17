<template>
  <v-navigation-drawer
    :value="sideNavOpen"
    fixed
    temporary
    bottom
    @input="closeSideNav"
  >
    <app-navigation vertical />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import AppNavigation from '@/components/AppNavigation.vue';

export default {
  name: 'AppSideNav',
  components: { AppNavigation },
  computed: mapState(['sideNavOpen']),
  methods: {
    closeSideNav(isClosed) {
      if (!isClosed) this.$store.dispatch('toggleSideNav');
    }
  }
};
</script>

<style lang="scss" scoped></style>
