import React, { useState } from "react";
import axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "560a1ca2e7ce51ab0f86fe9b46d1539e"; // Replace with your API Key

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found. Please enter a valid city name.");
    }
    
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>
      {weather && (
        <div className="weather-container">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
