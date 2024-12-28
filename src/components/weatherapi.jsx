import React, { useState } from "react";
import axios from "axios";
import "./weatherapp.css";

function Api() {
    const [city, setCity] = useState("");  // State to store the city name
    const [weather, setWeather] = useState(null);  // State to store weather data
    const apiKey = "9c03ae49705801d954820517e5c354e8"; // Replace with your API key

    // Function to fetch weather data
    const getWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

            setWeather(response.data);  // Set the weather data in state
        } catch (error) {
            alert("City not found. Please enter a valid city name.");
        }
    };

    return (
        <section>


            <div className="app">
                <h1>Weather App</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}  // Update city state on input change
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
            <div className="homepage">
                <a href="http://localhost:3000/homepage"><button >Home</button></a>
            </div>
        </section>
    );
}

export default Api;