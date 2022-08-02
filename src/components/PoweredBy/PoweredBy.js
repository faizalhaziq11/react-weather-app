import React from "react";
import styles from "./PoweredBy.module.css";

const PoweredBy = () => {
  return (
    <div className={styles.container}>
      <p>Powered By</p>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a>
    </div>
  );
};

export default PoweredBy;
