import React from "react";
import StructureDate from "./structureDate";
import WeatherIcon from "./WeatherIcon";
import WeatherDegree from "./WeatherDegree";

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
              <WeatherIcon code={props.data.icon} size={50} />
            </div>
            <div className="float-left">
              <WeatherDegree celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: {props.data.wind}%</li>
            <li>Humidity: {props.data.humidity}km/h</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
