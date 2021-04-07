import "./WeatherCard.css";

export default function SearchForm() {
  return (
    <div className="card weather-card">
      <div className="card-body border border-5 rounded">
        <p className="card-text display-5 cities"></p>
        <p className="card-text current-date"></p>
        <div className="row">
          <div className="col-md-6">
            <div className="creafix main-weather">
              <span className="float-left weatherIcon"></span>
              <div className="float-left">
                <span classNames="temperature celsius actualTemp">20</span>
                <span className="buttons">
                  <a type="button" className="js-toggle-unit js-celsius active">
                    °C
                  </a>
                  |
                  <a type="button" className="js-toggle-unit js-fahrenheit">
                    °F
                  </a>
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
                <span className="wind-speed">2</span>
              </div>
              <div>
                Humidity:
                <span className="humidity">80%</span>
              </div>
            </div>
          </div>
          <p className="card-text weather-description">Clear Sky</p>
        </div>
      </div>
    </div>
  );
}
