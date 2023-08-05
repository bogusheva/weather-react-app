import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Description from "./Description";

export default function Weather() {
  const [city, setCity] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({
    temperature: null,
    description: "",
    humidity: null,
    wind: null,
    icon: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "f97f8eaebc5efe3fd907c0565c3a9148";
    let units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(showData);
    setCity("");
  }

  function showData(response) {
    setIsLoaded(true);
    setData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  return (
    <div>
      <Form
        city={city}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {isLoaded && <Description data={data} />}
    </div>
  );
}
