export const state = () => ({
  alignToLeft: true,
  imageUrl: '',
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },

  setAlign(state, { name }) {
    return (state[name] = !state[name]);
  },
};

export const actions = {
  toggleAlign({ commit }) {
    commit('setAlign', {
      name: 'alignToLeft',
    });
  },

  defineImageUrl({ commit }, { payload }) {
    commit('setState', {
      name: 'imageUrl',
      value: payload,
    });
  },
};

export const getters = {
  getAlignDirection(state) {
    return state.alignToLeft;
  },

  getImageUrl(state) {
    return state.imageUrl;
  },
};
