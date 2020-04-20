import Vue from 'vue';
import Vuex from 'vuex';
import * as sideNav from '@/store/modules/sideNav';
import * as notification from '@/store/modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { sideNav, notification }
});
