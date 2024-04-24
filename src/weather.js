import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form action="">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Wednesday 0:700</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              {" "}
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              ></img>
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="degree">C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Wind: {weatherData.wind}</li>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Perciptation</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let city = "New York";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
