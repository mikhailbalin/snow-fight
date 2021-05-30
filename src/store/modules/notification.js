export const state = {
  msg: '',
  type: '',
  visible: false,
};

export const mutations = {
  SHOW_NOTIFICATION(state, payload) {
    state.msg = payload.msg;
    state.type = payload.type;
    state.visible = true;
  },

  HIDE_NOTIFICATION(state) {
    state.msg = '';
    state.type = '';
    state.visible = false;
  },
};

export const actions = {
  showNotification({ commit }, payload) {
    commit('SHOW_NOTIFICATION', payload);
  },

  clearNotification({ commit }) {
    commit('HIDE_NOTIFICATION');
  },
};
