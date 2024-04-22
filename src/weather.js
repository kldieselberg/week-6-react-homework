import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form action="">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      Hello from Weather
      <h1>New York</h1>
      <ul>
        <li>Wednesday 0:700</li>
        <li>Wednesday 0:700</li>
      </ul>
      <div className="row">
        <div className="col-6">
          {" "}
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"></img>
          6C
        </div>
        <div className="col-6">
          <ul>
            <li>Perciptation</li>
            <li>Perciptation</li>
            <li>Perciptation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
