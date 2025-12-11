import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast({ city }) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const apiKey = "d4ef035e3fbd4697b7a638t907f10o0c";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
    });
  }, [city]);

  if (!forecast) {
    return null; // wait until forecast data arrives
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            {new Date(forecast[0].time * 1000).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </div>
          <WeatherIcon code={forecast[0].condition.icon} size={35} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
              {Math.round(forecast[0].temperature.maximum)}°
            </span>
            <span className="WeatherForecast-temperature-min">
              {Math.round(forecast[0].temperature.minimum)}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
