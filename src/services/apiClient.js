import axios from 'axios';

class ApiClient {
  constructor() {
    this.apiBaseUrl = `${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1`;
  }

  static validateEndpoint(endpoint) {
    if (!endpoint.startsWith('/')) {
      throw new Error(`API relative URIs have to start with a slash. Please fix endpoint: ${endpoint}`);
    }
  }

  get(endpoint) {
    ApiClient.validateEndpoint(endpoint);
    return axios.get(this.apiBaseUrl + endpoint);
  }

  post(endpoint, data) {
    ApiClient.validateEndpoint(endpoint);
    return axios.post(this.apiBaseUrl + endpoint, data);
  }
}

// Create singleton API Client
const apiClient = new ApiClient();
export default apiClient;
