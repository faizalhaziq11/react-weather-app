import React from "react";
import Card from "../UI/Card";

const CurrentWeather = (props) => {
  const { current, location } = props.data;

  return (
    <Card>
      <div>
        <p>{`${location.name}, ${location.country}`}</p>
        <div>
          <img src={current.condition.icon} />
          <p>{current.temp_c}</p>
          <p>{current.is_day === 0 ? "Day" : "Night"}</p>
          <p>{current.condition.text}</p>
          <div></div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
