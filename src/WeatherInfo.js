import React from "react";
import StructureDate from "./structureDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="Weather Info">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <StructureDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            {" "}
            <div className="float-left ">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="degree">ºC</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: {props.data.wind}</li>
            <li>Humidity: {props.data.humidity}</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
