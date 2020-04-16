<template>
  <v-navigation-drawer
    :value="sideNavOpen"
    fixed
    temporary
    bottom
    @input="closeSideNav"
  >
    <app-navigation />
    <!-- <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list> -->
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
