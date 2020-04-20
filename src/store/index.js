import Vue from 'vue';
import Vuex from 'vuex';
import * as sideNav from '@/store/modules/sideNav';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { sideNav }
});
