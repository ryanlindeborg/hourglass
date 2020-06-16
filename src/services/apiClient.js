import axios from 'axios';
import store from '../store/store';

class ApiClient {
  constructor() {
    this.apiBaseUrl = `${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1`;
  }

  static validateEndpoint(endpoint) {
    if (!endpoint.startsWith('/')) {
      throw new Error(`API relative URIs have to start with a slash. Please fix endpoint: ${endpoint}`);
    }
  }

  static getRequestConfig() {
    return {
      headers: ApiClient.getRequestHeaders(),
    };
  }

  static getRequestHeaders() {
    // Set JWT authentication header
    return { 'X-Auth-Token': store.getters.authenticationToken };
  }

  get(endpoint) {
    ApiClient.validateEndpoint(endpoint);
    this.setRequestConfig();
    return axios.get(this.apiBaseUrl + endpoint, ApiClient.getRequestConfig());
  }

  post(endpoint, data) {
    ApiClient.validateEndpoint(endpoint);
    this.setRequestConfig();
    return axios.post(this.apiBaseUrl + endpoint, data, ApiClient.getRequestConfig());
  }
}

// Create singleton API Client
const apiClient = new ApiClient();
export default apiClient;
