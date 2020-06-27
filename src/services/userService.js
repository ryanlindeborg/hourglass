import apiClient from './apiClient';
import store from '../store/store';


class UserService {
  constructor() {
    this.registrationEndpoint = '/user/registration';
    this.loginEndpoint = '/user/session';
  }
  // registrationEndpoint = '/user/registration';
  //
  // loginEndpoint = '/user/session';

  registerUser(registrationDetails) {
    return apiClient.post(this.registrationEndpoint, registrationDetails)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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
    // TODO: Figure out how to make non-static without requiring use of this,
    //  or else figure out how to call static method of UserService
    console.log(`temporary: ${this.loginEndpoint}`);
    // TODO: Invalidate JWT token
    apiClient.setAuthenticationToken('');
    store.commit('clearUserSessionData');
    router.replace({ name: 'Home' });
  }
}

export default new UserService();
// export default UserService;
