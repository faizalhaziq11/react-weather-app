import Card from "../../UI/Card";
import styles from "./TodayForecast.module.css";
import React, { useState } from "react";

const TodayForecast = (props) => {
  const { forecast } = props.data;
  const today = forecast.forecastday[0];

  const [currentPage, setCurrentPage] = useState(1);
  const ITEM_PER_PAGE = 8;

  const current = new Date();
  const currentHour = current.getHours();

  const filteredForecast = today.hour.filter((hour) => {
    const forecastHour = new Date(hour.time).getHours();
    return forecastHour >= currentHour && forecastHour <= currentHour + 12;
  });

  const indexOfLastItem = currentPage * ITEM_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEM_PER_PAGE;
  const currentItems = filteredForecast.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Card>
      <h2>24 Hours Forecast</h2>
      <div className="">
        <div className={styles["hourly-forecast"]}>
          {currentItems.map((hour) => (
            <React.Fragment key={hour.time}>
              <HourlyForecast data={hour} />
            </React.Fragment>
          ))}
        </div>
        <div className={styles["pagination"]}>
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} style={{rotate: "180deg"}}>&#10140;</button>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(filteredForecast.length / ITEM_PER_PAGE)}>&#10140;</button>
        </div>
      </div>
    </Card>
  );
};

export const HourlyForecast = (props) => {
  const { data } = props;
  const currentTime = new Date(data.time);
  const currentHour = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
  });
  
  return (
    <div className={styles["hourly"]}>
      <h2>{currentHour}</h2>
      <img src={data.condition.icon} alt="" />
      {/* <p className={styles["condition"]}>{data.condition.text}</p> */}
      {/* <p className={styles["condition"]}>Chance of raining {data.chance_of_rain}%</p> */}
      <p>{data.temp_c} ℃</p>
    </div>
  );
};

export const CurrentHourlyForecast = (props) => {
  return (
    <div>
      <h2>Current Hourly Forecast</h2>
      <p>Current Time: {props.data.time}</p>
      <img src={props.data.condition.icon} alt="" />
      <p>{props.data.temp_c} ℃</p>
    </div>
  )
}

export default TodayForecast;
