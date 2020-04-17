import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideNavOpen: false,
    tel: '+7 (931) 234-06-66'
  },
  mutations: {
    TOGGLE_SIDE_NAV(state) {
      state.sideNavOpen = !state.sideNavOpen;
    }
  },
  actions: {
    toggleSideNav(context) {
      const { commit } = context;
      commit('TOGGLE_SIDE_NAV');
    }
  }
});
