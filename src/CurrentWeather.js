import React from "react";

export default function CurrentWeather({ weather }) {
  return (
    <div style={{ marginTop: "30px", fontSize: "16pt", lineHeight: "1.6" }}>
      <p>
        It is {Math.round(weather.temperature)}°C in {weather.city}
      </p>
      <p>Description: {weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind: {weather.wind} km/h</p>
      <img src={weather.icon} alt={weather.description} />
    </div>
  );
}
