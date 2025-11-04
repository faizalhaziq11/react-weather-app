import axios from "axios";

const BASE_URL = import.meta.env.PROD ? import.meta.env.PUBLIC_WEATHER_API_URL // e.g. "https://api.themoviedb.org/3"
  : '/weather-api'; // matches proxy path

// const instance = axios.create({
//   baseURL: "/weather-api",
//   timeout: 60000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   params: {
//     key: import.meta.env.PUBLIC_WEATHER_API_KEY
//   }
// })

export const apiClient = {
  get: async function (url, headers = {}) {
    // console.log(`Making GET request to: ${url}`);
    return axios({
      method: 'GET',
      url: url,
      headers: headers
    }).then(response => {
      // console.log('API Response:', response);
      return response;
    }).catch(error => {
      console.error(`API GET Error for ${url}:`, error);
      throw error;
    });
  }
}