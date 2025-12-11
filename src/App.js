import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <h2>Weather Forecast</h2>
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Charllotte Blackwell-Maleshkov and is{" "}
          <a
            href="https://github.com/CharllieeBM/weather-forecast-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="weather-forecast-react2.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
