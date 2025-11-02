import { Fragment, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import { WEATHER_API_URL, API_KEY, getCurrentWeather, getForecastWeather } from "./lib/api";
import CurrentWeather from "./components/Weather/CurrentWeather";
import ForecastWeather from "./components/Weather/ForecastWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [noData, setNoData] = useState(true);
  const [error, setError] = useState(false);

  const searchWeather = async (location) => {
    if (location === "") {
      setNoData(true);
    }

    const currentWeatherReq = getCurrentWeather(location);
    const forecastWeatherReq = getForecastWeather(location)

    Promise.all([currentWeatherReq, forecastWeatherReq])
      .then(async (response) => {
        const weatherResponse = await response[0].data;
        const forecastResponse = await response[1].data;

        if (response[0].status !== 200 && !response[1].status !== 200) {
          setNoData(false);

          throw new Error(
            `(${weatherResponse.error.message} ${response[0].status})`
          );
        }

        setCurrentWeather({ ...weatherResponse });
        setForecastWeather({ ...forecastResponse });
      })
      .catch((error) => {
        setError(error);
        setNoData(true);
        console.log(error);
      });

    setNoData(false);
  };

  return (
    <Fragment>
      <div className="App">
        <Search searchWeather={searchWeather} />
        <div className="container">
          {noData && <p>{error}</p>}
          {!noData && forecastWeather && (
            <ForecastWeather data={forecastWeather} />
          )}
          {!noData && currentWeather && (
            <CurrentWeather data={currentWeather} />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
