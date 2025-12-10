import React, { useState } from "react";
import { getWeather, getForecast } from "./utils/api";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import { TailSpin } from "react-loader-spinner";

export default function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let [forecast, setForecast] = useState([]);
  let [loading, setLoading] = useState(false);

  async function handleSearch(searchCity) {
    setLoading(true);
    setCity(searchCity);
    try {
      let weatherData = await getWeather(searchCity);
      let forecastData = await getForecast(searchCity);

      // Group forecast data by day (API returns 3-hour intervals)
      let dailyData = [];
      let seenDays = new Set();
      forecastData.list.forEach((item) => {
        let date = new Date(item.dt * 1000);
        let day = date.toLocaleDateString("en-US", { weekday: "short" });
        if (!seenDays.has(day) && dailyData.length < 5) {
          seenDays.add(day);
          dailyData.push(item);
        }
      });

      setWeather(weatherData);
      setForecast(dailyData);
    } catch {
      alert("City not found!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div style={{ marginTop: "30px" }}>
          <TailSpin
            height="60"
            width="60"
            color="#007BFF"
            ariaLabel="loading"
          />
        </div>
      )}

      {weather && !loading && (
        <>
          <CurrentWeather weather={weather} />
          <ForecastList forecast={forecast} />
        </>
      )}
    </div>
  );
}
