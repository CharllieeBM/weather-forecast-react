import axios from "axios";

let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";

export async function getWeather(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let response = await axios.get(url);
  let data = response.data;

  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  };
}

export async function getForecast(city) {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  let response = await axios.get(url);
  return response.data;
}
