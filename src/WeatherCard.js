import React, { useState } from "react";
import "./WeatherCard.css";

export default function WeatherCard(props) {
  let [city, setCity] = useState("props.city");
  let [temperature, setTemperature] = useState(props.temperature);

  function farheneit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }
  function celsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div className="card weather-card">
      <div className="card-body border border-5 rounded">
        <p className="card-text display-5 cities">{props.city}</p>
        <p className="card-text current-date">{props.date}</p>
        <div className="row">
          <div className="col-md-6">
            <div className="creafix main-weather">
              <span className="float-left weatherIcon"></span>
              <div className="float-left">
                <span className="temperature celsius actualTemp">
                  {props.temperature}
                </span>
                <span className="buttons">
                  <a
                    href="/"
                    onClick={celsius}
                    className="js-toggle-unit js-celsius active"
                  >
                    °C
                  </a>{" "}
                  |{" "}
                  <a
                    href="/"
                    onClick={farheneit}
                    className="js-toggle-unit js-fahrenheit"
                  >
                    °F
                  </a>{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="weather-details">
              <div>
                Pressure:
                <span className="pressure">5</span>
              </div>
              <div>
                Wind:
                <span className="wind-speed">{props.wind}</span>
              </div>
              <div>
                Humidity:
                <span className="humidity">{props.humidity}%</span>
              </div>
            </div>
          </div>
          <p className="card-text weather-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
