import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

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
    return null; 
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]} />
        </div>
        <div className="col">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col">
          <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    </div>
  );
}
