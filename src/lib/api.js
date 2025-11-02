import { apiClient } from "../helper/requestHelper";

const baseUrl = import.meta.env.PUBLIC_WEATHER_API_URL;
const apiKey = import.meta.env.PUBLIC_WEATHER_API_KEY;

export const getCurrentWeather = (location = "") => {
  const sanitizedLocation = encodeURIComponent(location.trim());
  const params = new URLSearchParams({
    key: apiKey,
    q: sanitizedLocation,
    aqi: "no"
  });

  return apiClient.get('/weather-api' + 'current.json?' + params)
}

export const getForecastWeather = (location = "") => {
  const sanitizedLocation = encodeURIComponent(location.trim());
  const params = new URLSearchParams({
    key: apiKey,
    q: sanitizedLocation,
    days: 10,
    aqi: "no",
    alerts: "no"
  });

  return apiClient.get(baseUrl + 'forecast.json?' + params)
}
