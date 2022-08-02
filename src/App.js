import { Fragment, useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import PoweredBy from "./components/PoweredBy/PoweredBy";
import { WEATHER_API_URL, API_KEY } from "./lib/api";
import CurrentWeather from "./components/Weather/CurrentWeather";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const currentWeatherRequest = async (location) => {
    console.log(location);
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
        <Search searchWeather={currentWeatherRequest} />
        <PoweredBy />
        {!currentWeather && <p>No location is loaded</p>}
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
    </Fragment>
  );
}

export default App;
