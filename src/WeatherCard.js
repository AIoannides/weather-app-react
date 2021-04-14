import "./WeatherCard.css";

export default function WeatherCard(props) {
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
                <span classNames="temperature celsius actualTemp">
                  {props.temperature}°C
                </span>
                <span className="buttons">
                  <input
                    type="button"
                    value="°C"
                    className="js-toggle-unit js-celsius active"
                  />
                  |
                  <input
                    type="button"
                    value="°F"
                    className="js-toggle-unit js-fahrenheit"
                  />
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
          <p className="card-text weather-description">Clear Sky</p>
        </div>
      </div>
    </div>
  );
}
