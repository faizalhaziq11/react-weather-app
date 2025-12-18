import axios from 'axios';

const headers = { Accept: 'application/json' };

export const apiClient = {
  get: async function (url, params = {}) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // console.log(`Making GET request to: ${url}`);
    return axios({
      method: 'GET',
      url: url,
      headers: headers,
      params: params,
    })
      .then((response) => {
        // console.log('API Response:', response);
        return response;
      })
      .catch((error) => {
        console.error(`API GET Error for ${url}:`, error);
        throw error;
      });
  },
};

// Response Interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.error(`API GET Error for ${url}:`, error);

    if (error.response) {
      const status = error.response.status;

      if (status === 400) {
        const { message } = error.response.data.error;
        throw new Error(message);
      }
    }
    throw error;
  }
);
