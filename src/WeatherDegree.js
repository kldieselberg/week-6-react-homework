import React, { useState } from "react";

export default function WeatherDegree(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCels(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherDegree">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ºC | {""}{" "}
          <a href="/" onClick={convertFar}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    const fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherDegree">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertCels}>
            ºC
          </a>{" "}
          | {""} ºF
        </span>
      </div>
    );
  }
}
