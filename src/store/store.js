import Vue from 'vue';
import Vuex from 'vuex';

import apiClient from '../services/apiClient';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticationToken: null,
  },
  getters: {
    authenticationToken: (state) => state.authenticationToken,
  },
  mutations: {
    persistAuthenticationToken: (state, token) => {
      state.authenticationToken = token;
    },
  },
  actions: {
    registerUser({ commit }, registrationDetails) {
      apiClient.post('/user/registration', registrationDetails)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
    login({ commit }, loginDetails) {
      apiClient.post('/user/session', loginDetails)
        .then((res) => {
          commit('persistAuthenticationToken', res.data.authenticationToken.token);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {
  },
});
