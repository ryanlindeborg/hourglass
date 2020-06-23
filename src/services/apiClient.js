import axios from 'axios';

class ApiClient {
  constructor() {
    this.apiBaseUrl = `${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1`;
    this.authenticationToken = '';
  }

  static validateEndpoint(endpoint) {
    if (!endpoint.startsWith('/')) {
      throw new Error(`API relative URIs have to start with a slash. Please fix endpoint: ${endpoint}`);
    }
  }

  setAuthenticationToken(token) {
    this.authenticationToken = token;
  }

  getRequestConfig() {
    return {
      headers: this.getRequestHeaders(),
    };
  }

  getRequestHeaders() {
    // Set JWT authentication header
    return { 'X-Auth-Token': this.authenticationToken, 'Content-Type': 'application/json' };
  }

  get(endpoint) {
    ApiClient.validateEndpoint(endpoint);
    return axios.get(this.apiBaseUrl + endpoint, this.getRequestConfig());
  }

  post(endpoint, data) {
    ApiClient.validateEndpoint(endpoint);
    return axios.post(this.apiBaseUrl + endpoint, data, this.getRequestConfig());
  }
}

// Create singleton API Client
const apiClient = new ApiClient();
export default apiClient;
