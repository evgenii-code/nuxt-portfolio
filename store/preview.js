export const state = () => ({
  alignToLeft: true,
  imageUrl: '',
  previewUrl: '',
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

  changeAlign({ commit }, { payload }) {
    commit('setState', {
      name: 'alignToLeft',
      value: payload,
    });
  },

  defineImageUrl({ commit }, { payload }) {
    commit('setState', {
      name: 'imageUrl',
      value: payload,
    });
  },

  definePreviewUrl({ commit }, { payload }) {
    commit('setState', {
      name: 'previewUrl',
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

  getPreviewUrl(state) {
    return state.previewUrl;
  },
};
