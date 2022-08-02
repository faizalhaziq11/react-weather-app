import React from "react";
import styles from "./ForecastWeather.module.css";

const ForecastWeather = (props) => {
  const { location, current, forecast } = props.data;

  const getToday = new Date(forecast.forecastday[0].date);
  // const options = { year: "numeric", month: "short", day: "numeric" };
  // const currentTime = getToday.toLocaleTimeString("en-US");
  // const currentDate = getToday.toLocaleDateString("en-US", options);
  const currentDay = getToday.toLocaleDateString("en-US", { weekday: "short" });

  console.log(forecast);

  const weekday = forecast.forecastday.map((weather) => {
    const getToday = new Date(weather.date);
    const currentDay = getToday.toLocaleDateString("en-US", {
      weekday: "short",
    });
    return (
      <div className={styles.items} key={weather.date}>
        <span>{currentDay ? currentDay : "--"}</span>
        <div class={styles["humidity-containers"]}>
          <img src="./icons8-hygrometer-48.png" />
          <div>{weather.day.avghumidity}</div>
        </div>
        <img src={weather.day.condition.icon} />
        <div className={styles["temp-containers"]}>
          <span>Min</span>
          <span>{weather.day.mintemp_c.toFixed(1)}°C</span>
        </div>
        <div className={styles["temp-containers"]}>
          <span>Max</span>
          <span>{weather.day.maxtemp_c.toFixed(1)}°C</span>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <span className={styles["text-header"]}>Weekly Weather Forecast</span>
        <img
          src="./sunny_weather_icon.png"
          className={styles["img-header"]}
          alt="logo"
        />
      </div>
      {weekday}
    </div>
  );
};

export default ForecastWeather;
