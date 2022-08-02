import { Fragment, useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import { WEATHER_API_URL, API_KEY } from "./lib/api";
import CurrentWeather from "./components/Weather/CurrentWeather";
import ForecastWeather from "./components/Weather/ForecastWeather";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const searchWeather = async (location) => {
    const currentWeatherReq = fetch(
      `${WEATHER_API_URL}/current.json?key=${API_KEY}&q=${location}&aqi=no`
    );

    const forecastWeatherReq = fetch(
      `${WEATHER_API_URL}/forecast.json?key=${API_KEY}&q=${location}&days=10&aqi=no&alerts=no`
    );

    Promise.all([currentWeatherReq, forecastWeatherReq]).then(
      async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // console.log(weatherResponse);
        // console.log(forecastResponse);

        setForecastWeather({ ...forecastResponse });
      }
    );

    const response = await fetch(
      `${WEATHER_API_URL}/current.json?key=${API_KEY}&q=${location}&aqi=no`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not fetch weather data");
    }

    setCurrentWeather(data);
  };

  return (
    <Fragment>
      <div className="App">
        <Search searchWeather={searchWeather} />
        <div className="container">
          {/* <PoweredBy /> */}
          {/* {!currentWeather && <p>No location is loaded</p>} */}
          {forecastWeather && <ForecastWeather data={forecastWeather} />}
          {currentWeather && <CurrentWeather data={currentWeather} />}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
