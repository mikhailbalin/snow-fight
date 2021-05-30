export const state = { sideNavOpen: false };

export const mutations = {
  TOGGLE_SIDE_NAV(state) {
    state.sideNavOpen = !state.sideNavOpen;
  },
};

export const actions = {
  toggleSideNav(context) {
    const { commit } = context;
    commit('TOGGLE_SIDE_NAV');
  },
};
