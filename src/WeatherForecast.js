import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
  let longitude = props.coordinates.long;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
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
