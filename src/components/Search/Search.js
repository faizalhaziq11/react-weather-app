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
        <form onSubmit={inputSubmitHandler}>
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            value={enteredInput}
            onChange={inputChangeHandler}
          />
          <Button type="submit">Enter</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Search;
