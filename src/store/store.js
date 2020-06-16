import Vue from 'vue';
import Vuex from 'vuex';

import apiClient from '../services/apiClient';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticationToken: null,
  },
  mutations: {
    persistAuthenticationToken: (state) => {
      state.authenticationToken = null;
    },
  },
  actions: {
    registerUser({commit}, registrationDetails) {
      apiClient.post('/user/registration', registrationDetails)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
    login({commit}, loginDetails) {
      apiClient.post('/user/session', loginDetails)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
  modules: {
  },
});
