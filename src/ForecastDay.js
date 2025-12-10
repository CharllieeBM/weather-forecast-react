import React from "react";

export default function ForecastDay({ data }) {
  let date = new Date(data.dt * 1000);
  let day = date.toLocaleDateString("en-US", { weekday: "short" });
  let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let description = data.weather[0].description
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        borderRadius: "10px",
        padding: "15px",
        width: "120px",
        textAlign: "center",
      }}
    >
      <h3>{day}</h3>
      <img src={icon} alt={description} width="60" />
      <p style={{ fontSize: "14px" }}>{description}</p>
      <p>
        {Math.round(data.main.temp_min)}° / {Math.round(data.main.temp_max)}°
      </p>
    </div>
  );
}
