import { Fragment, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import { getCurrentWeather, getForecastWeather } from './lib/api';
import CurrentWeather from './components/Weather/CurrentWeather';
import ForecastWeather from './components/Weather/ForecastWeather';
import TodayForecast from './components/Weather/TodayForecast/TodayForecast';
import Header from './components/UI/Header';
import Loader from './components/UI/Loader';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [noData, setNoData] = useState(true);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (import.meta.env.MODE === 'development') {
    // console.log('this is development mode');
  }

  const searchWeather = async (location) => {
    if (location === '') {
      setNoData(true);
      return;
    }

    setIsLoading(true);
    setNoData(false);

    const currentWeatherReq = getCurrentWeather(location);
    const forecastWeatherReq = getForecastWeather(location);

    Promise.all([currentWeatherReq, forecastWeatherReq])
      .then((response) => {
        const weatherResponse = response[0].data;
        const forecastResponse = response[1].data;

        if (response[0].status !== 200 || response[1].status !== 200) {
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
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Fragment>
      <div className='App'>
        <Header />
        <div className='search-container'>
          <Search searchWeather={searchWeather} disable={isLoading} />
        </div>
        {isLoading && <Loader />}
        {noData && error && <p>{error.message}</p>}
        {!noData && !isLoading && (
          <div className='weather-container'>
            {currentWeather && (
              <div className='current'>
                <CurrentWeather data={currentWeather} />
              </div>
            )}
            {forecastWeather && (
              <div className='today'>
                <TodayForecast data={forecastWeather} />
              </div>
            )}
          </div>
        )}
        {!noData && !isLoading && forecastWeather && (
          <div className='weekly'>
            <ForecastWeather data={forecastWeather} />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default App;
