export const state = () => ({
  projects: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchData({ state, commit }) {
    return this.$axios
      .$get(`projects`)
      .then(response => {
        return commit('setState', {
          name: 'projects',
          value: response,
        });
      })
      .catch(error => console.log(error));
  },
};

export const getters = {
  getProjects(state) {
    return state.projects;
  },
};
