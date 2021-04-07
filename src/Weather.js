import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    return (
      <h1>
        The weather in {response.data.name} is {response.data.main.temp} C
      </h1>
    );
  }
  let apiKey = "c0f3afe2be69a14ab9fb1d02ca6c2d47";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return "hello again";
}
