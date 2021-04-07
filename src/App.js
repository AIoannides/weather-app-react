import React from "react";
import SearchForm from "./SearchForm";
import WeatherCard from "./WeatherCard";
import ForeCastCard from "./ForeCastCard";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container font-monospace">
        <div className="card bg-transparent border-light">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <SearchForm />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <WeatherCard />
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
      <footer>
        <small>
          <a
            href="https://github.com/AIoannides/my-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by A.A.Ioannides
        </small>
      </footer>
    </div>
  );
}
