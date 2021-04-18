import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import ForeCastCard from "./ForeCastCard";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  let [city, setCity] = useState("London");
  let [weather, setWeather] = useState({});

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   getWeather();
  // }, [city, getWeather]);

  function getWeather() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0f3afe2be69a14ab9fb1d02ca6c2d47&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    const iconCode = response.data.weather[0].icon;
    setWeather({
      iconSource: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  return (
    <div className="App">
      <div className="container font-monospace">
        <div className="card bg-transparent border-light">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
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
                            <i className="fas fa-search"></i>
                          </button>
                          <button
                            className="btn btn-outline-secondary pin-button"
                            type="button"
                          >
                            <i className="fas fa-map-pin"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <WeatherCard
                      city={city}
                      date="Wednesday 14 April"
                      weather={weather}
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <ForeCastCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
