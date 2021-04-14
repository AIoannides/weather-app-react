import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0f3afe2be69a14ab9fb1d02ca6c2d47&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    let iconCode = response.data.weather[0].icon;
    let iconSource = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    setTemperature(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {Math.round(response.data.main.humidity)}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)}</li>
        <li>
          <img src={iconSource} alt="/" />{" "}
        </li>
      </ul>
    );
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control search-location"
            placeholder="Search Location"
            onChange={handleChange}
            aria-label="Search Location"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary find-city"
            type="submit"
            value="submit"
          >
            <i class="fas fa-search"></i>
          </button>
          <button
            className="btn btn-outline-secondary pin-button"
            type="button"
          >
            <i class="fas fa-map-pin"></i>
          </button>
        </div>
      </form>
      <div>{temperature}</div>
    </div>
  );
}
