import apiClient from './apiClient';
import store from '../store/store';


class UserService {
  constructor() {
    this.registrationEndpoint = '/user/registration';
    this.loginEndpoint = '/user/session';
    this.logoutEndpoint = '/user/token-revocation';
    this.profileEndpoint = '/profile/user';
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

  // eslint-disable-next-line class-methods-use-this
  loginOAuthUser() {
    const loginUrl = `${process.env.VUE_APP_BASE_SPRING_API_URL}/oauth2/authorization/github`;
    const authWindow = window.open(loginUrl, '_blank', 'location=yes,height=600,width=600');
    return new Promise((resolve) => {
      const oauthFinishedMessageHandler = (event) => {
        if (event.origin === `${process.env.VUE_APP_BASE_SPRING_API_URL}` && event.data
          && event.data.oauthCompleted === true) {
          authWindow.close();
          window.removeEventListener('message', oauthFinishedMessageHandler.bind(this));
          store.commit('loginOAuthUser');
          resolve();
        }
      };

      window.addEventListener('message', oauthFinishedMessageHandler);
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

  submitProfileDetails(profileDetails) {
    return apiClient.post(this.profileEndpoint, profileDetails);
  }

  getProfileDetails() {
    return apiClient.get(`${this.profileEndpoint}/${store.state.userDisplayName}`);
  }
}

export default new UserService();
// export default UserService;
