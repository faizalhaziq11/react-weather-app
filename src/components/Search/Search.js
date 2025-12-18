import React, { useState } from 'react';
import styles from './Search.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Search = (props) => {
  const [enteredInput, setEnteredInput] = useState('');

  const inputSubmitHandler = (event) => {
    event.preventDefault();

    props.searchWeather(enteredInput);
    setEnteredInput('');
  };

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  return (
    <React.Fragment>
      <Card className={styles.input}>
        <form
          onSubmit={inputSubmitHandler}
          className={styles['form-container']}
        >
          <input
            id='search'
            type='text'
            placeholder='Enter city name'
            className={styles.inputText}
            value={enteredInput}
            onChange={inputChangeHandler}
            disabled={props.disable}
          />
          <Button type='submit' disabled={props.disable}>
            Submit
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Search;
