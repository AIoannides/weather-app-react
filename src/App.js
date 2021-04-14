import React from "react";
import SearchForm from "./SearchForm";
import WeatherCard from "./WeatherCard";
import ForeCastCard from "./ForeCastCard";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
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
                    <WeatherCard
                      city="Paris"
                      date="Wednesday 14 April"
                      temperature={20}
                      humidity={90}
                      wind={5}
                      description="Clear
                      Sky"
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
