import axios from "axios";

const headers = { Accept: "application/json", "Accept-Encoding": "identity" };
export const apiClient = {
  get: async function (url, params = {}) {
    // console.log(`Making GET request to: ${url}`);
    return axios({
      method: 'GET',
      url: url,
      headers: headers,
      params: params
    }).then(response => {
      // console.log('API Response:', response);
      return response;
    }).catch(error => {
      console.error(`API GET Error for ${url}:`, error);
      throw error;
    });
  }
}