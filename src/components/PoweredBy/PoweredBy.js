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
      <a target="_blank" href="https://icons8.com/icon/OFU5h8HeWK3z/clouds">
        Clouds
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
};

export default PoweredBy;
