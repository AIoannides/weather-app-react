import React from "react";
import "./WeatherCard.css";
import moment from "moment";

export default function WeatherCard(props) {
  return (
    <div className="card weather-card">
      <div className="card-body border border-5 rounded">
        <p className="card-text display-5 cities">{props.city}</p>
        <p className="card-text current-date">
          {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="creafix main-weather">
              <span className="float-left weatherIcon">
                <img src={props.weather.iconSource} alt="weather icon" />
              </span>
              <div className="float-left">
                <span className="temperature celsius actualTemp">
                  {props.weather.temperature}
                </span>
                <span className="buttons">
                  <a
                    href="/"
                    onClick={null}
                    className="js-toggle-unit js-celsius active"
                  >
                    °C
                  </a>{" "}
                  |{" "}
                  <a
                    href="/"
                    onClick={null}
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
                Wind:
                <span className="wind-speed">{props.weather.wind}</span>
              </div>
              <div>
                Humidity:
                <span className="humidity">{props.weather.humidity}%</span>
              </div>
            </div>
          </div>
          <p className="card-text weather-description">
            {props.weather.description}
          </p>
        </div>
      </div>
    </div>
  );
}
