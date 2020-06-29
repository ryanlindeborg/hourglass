import Vue from 'vue';
import Vuex from 'vuex';
import jwtDecode from 'jwt-decode';

Vue.use(Vuex);

// export const actions = {
//   registerUser(registrationDetails) {
//     apiClient.post('/user/registration', registrationDetails)
//       .then((res) => console.log(res))
//       .catch((error) => console.log(error));
//   },
//   async login({ commit }, loginDetails) {
//     const res = await apiClient.post('/user/session', loginDetails);
//
//     try {
//       const authenticationToken = res.data.authenticationToken.token;
//       // Storing token here in case need to access it from store
//       commit('loginUser', authenticationToken);
//       // Setting authentication token in apiClient for use in requests to backend
//       apiClient.setAuthenticationToken(authenticationToken);
//
//       // Set user display name from subject of token body
//       const tokenBody = jwtDecode(authenticationToken);
//       commit('setUserDisplayName', tokenBody.sub);
//     } catch (error) {
//       console.log(error);
//     }
//   },
//   logout({ commit }) {
//     commit('clearUserSessionData');
//     apiClient.setAuthenticationToken('');
//     router.replace({ name: 'Home' });
//     // TODO: Invalidate JWT token
//   },
// };

export default new Vuex.Store({
  state: {
    authenticationToken: null,
    userDisplayName: null,
    isLoggedIn: false,
  },
  mutations: {
    loginUser: (state, token) => {
      state.isLoggedIn = true;
      state.authenticationToken = token;
    },
    clearUserSessionData: (state) => {
      state.authenticationToken = null;
      state.userDisplayName = null;
      state.isLoggedIn = false;
    },
    setUserDisplayName(state, userDisplayName) {
      state.userDisplayName = userDisplayName;
    },
  },
  // actions,
  actions: {
    login({ commit }, authenticationToken) {
      // Storing token here in case need to access it from store
      commit('loginUser', authenticationToken);

      // Set user display name from subject of token body
      const tokenBody = jwtDecode(authenticationToken);
      commit('setUserDisplayName', tokenBody.sub);
    },
  },
  modules: {
  },
});
