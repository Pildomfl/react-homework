import React, { useState } from "react";
import axios from "axios";

export default function SearchingCity(props) {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState("");

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.main.wind_speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fdc8cfbf2d6fa0116c9ae92d3df4f79&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="searchies">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {weather.ready && (
        <ul>
          <li>{weather.city}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
        </ul>
      )}
    </div>
  );
}
