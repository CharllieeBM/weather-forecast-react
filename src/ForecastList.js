import React from "react";
import ForecastDay from "./ForecastDay";

export default function ForecastList({ forecast }) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>5-Day Forecast</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {forecast.map((day, index) => (
          <ForecastDay key={index} data={day} />
        ))}
      </div>
    </div>
  );
}
