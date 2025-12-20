import { apiClient } from '../helper/requestHelper';

export const getCurrentWeather = (location = "") => {
  const sanitizedLocation = encodeURIComponent(location.trim());

  return apiClient.get(`/.netlify/functions/getWeather?location=${sanitizedLocation}`)
};

export const getForecastWeather = (location = '') => {
  const sanitizedLocation = encodeURIComponent(location.trim());

  return apiClient.get(`/.netlify/functions/getForecast?location=${sanitizedLocation}`)
};
