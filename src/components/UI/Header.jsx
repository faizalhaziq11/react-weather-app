import styles from "./Header.module.css";

const Header = () => {
  return (
    <header
      className={styles.header}
      role="banner"
      itemScope
      itemType="http://schema.org/WPHeader"
      aria-label="Weather App Header"
    >
      <div className={styles["header__title-container"]}>
        <div>
          <h1 itemProp="headline" className={styles.header__title}>
            Weather App
          </h1>
          <p itemProp="description" className={styles.header__description}>
            Check the weather in your location
          </p>
          <span className={styles.header__poweredby}>
          Powered by{" "}
          <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
          </a>
          </span>
        </div>
        <img
          src="/sunny_weather_icon.png"
          alt="Sunny Weather App Logo"
          className={styles.header__logo}
        />
      </div>
      {/* <div>
        <input type="checkbox" name="dark-mode" id="dark-mode" />
        <label htmlFor="dark-mode">Dark Mode Toggle</label>
      </div> */}
    </header>
  );
};

export default Header;
