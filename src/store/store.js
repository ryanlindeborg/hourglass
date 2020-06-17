import Vue from 'vue';
import Vuex from 'vuex';

import router from '../router/router';
import apiClient from '../services/apiClient';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticationToken: null,
    userDisplayName: null,
  },
  getters: {
    authenticationToken: (state) => state.authenticationToken,
    isAuthenticated: (state) => state.authenticationToken !== null,
    userDisplayName: (state) => state.userDisplayName,
  },
  mutations: {
    persistAuthenticationToken: (state, token) => {
      state.authenticationToken = token;
    },
    clearUserSessionData: (state) => {
      state.authenticationToken = null;
      state.userDisplayName = null;
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
    logout({ commit }) {
      commit('clearUserSessionData');
      router.replace('/login');
    },
  },
  modules: {
  },
});
