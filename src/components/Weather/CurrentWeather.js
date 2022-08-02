import React from "react";
import Card from "../UI/Card";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = (props) => {
  const { current, location } = props.data;

  const getToday = new Date(location.localtime);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const currentTime = getToday.toLocaleTimeString("en-US");
  const currentDate = getToday.toLocaleDateString("en-US", options);

  const bgColor = current.is_day === 1 ? "day" : "night";

  return (
    <div className={`${styles[`${bgColor}`]} ${styles["cw-container"]} `}>
      <div className={styles["header"]}>
        <img
          className={`${styles["condition-img"]}`}
          src={current.condition.icon}
        />
        <div className={`${styles["today-container"]}`}>
          <span className={`${styles["text-big"]}`}>Today</span>
          <span className={`${styles["text-small"]}`}>
            {currentDate ? currentDate : "--"}
          </span>
          {/* <span>{currentTime}</span> */}
        </div>
      </div>
      <div className={styles["body"]}>
        <div className={styles["temperature-row"]}>
          <span className={styles["temperature"]}>{current.temp_c}</span>
          <span className={styles["celcius"]}>°C</span>
        </div>
        <p>{`${location.name}, ${location.country}`}</p>
        <div className={styles["parameter-row"]}>
          <img src="./icons8-windsock-48.png" />
          <span>{current.wind_kph} kph</span>
          <img src="./icons8-hygrometer-48.png" />
          <span>{current.humidity} %</span>
          <img src="./icons8-clouds-48.png" />
          <span>{current.cloud} %</span>
        </div>
        <p>Sky condition is {current.condition.text.toLowerCase()}</p>
        <div></div>
      </div>
    </div>
  );
};

export default CurrentWeather;
