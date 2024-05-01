import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>{" "}
          <WeatherIcon code="01d" size={20} />{" "}
          <div className="ForecastTemperature">
            {" "}
            <span className="Forecast-min">19</span>{" "}
            <span className="Forecast-max">20 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
