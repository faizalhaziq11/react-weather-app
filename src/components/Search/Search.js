import React, { useState } from "react";
import styles from "./Search.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Search = (props) => {
  const [enteredInput, setEnteredInput] = useState("");

  const inputSubmitHandler = (event) => {
    event.preventDefault();

    props.searchWeather(enteredInput);
    setEnteredInput("");
  };

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  return (
    <React.Fragment>
      <Card className={styles.input}>
        <form
          onSubmit={inputSubmitHandler}
          className={styles["form-container"]}
        >
          <label htmlFor="search">
            Weather Forecast <br />
          </label>
          <input
            id="search"
            type="text"
            placeholder="Enter city"
            value={enteredInput}
            onChange={inputChangeHandler}
          />
          <Button type="submit">Enter</Button>
        </form>
        <span>
          Powered by{" "}
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </a>
        </span>
      </Card>
    </React.Fragment>
  );
};

export default Search;
