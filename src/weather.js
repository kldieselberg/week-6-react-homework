import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "",
      date: new Date(response.data.dt * 1000),
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
        <WeatherInfo data={weatherData} />
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
