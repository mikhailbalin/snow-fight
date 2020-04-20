export const state = {
  msg: '',
  state: '',
  visible: false
};

export const mutations = {
  SHOW_NOTIFICATION(state, payload) {
    state.msg = payload.msg;
    state.state = payload.state;
    state.visible = true;
  },

  HIDE_NOTIFICATION(state) {
    state.msg = '';
    state.state = '';
    state.visible = false;
  }
};

export const actions = {
  showNotification({ commit }, payload) {
    commit('SHOW_NOTIFICATION', payload);
  },

  clearNotification({ commit }) {
    commit('HIDE_NOTIFICATION');
  }
};
