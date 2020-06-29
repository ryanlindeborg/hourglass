import apiClient from './apiClient';
import store from '../store/store';


class UserService {
  constructor() {
    this.registrationEndpoint = '/user/registration';
    this.loginEndpoint = '/user/session';
    this.logoutEndpoint = '/user/token-revocation';
  }
  // registrationEndpoint = '/user/registration';
  //
  // loginEndpoint = '/user/session';

  registerUser(registrationDetails) {
    return apiClient.post(this.registrationEndpoint, registrationDetails);
  }

  loginUser(loginDetails) {
    return apiClient.post(this.loginEndpoint, loginDetails)
      .then((res) => {
        const authenticationToken = res.data.token;

        // Setting authentication token in apiClient for use in requests to backend
        apiClient.setAuthenticationToken(authenticationToken);
        store.dispatch('login', authenticationToken);
      });
  }

  logout(router) {
    // TODO: Figure out how to handle front end if logout endpoint throws error back
    const logoutPromise = apiClient.post(this.logoutEndpoint, store.state.userDisplayName);

    apiClient.setAuthenticationToken('');
    store.commit('clearUserSessionData');
    router.replace({ name: 'Home' });

    return logoutPromise;
  }
}

export default new UserService();
// export default UserService;
