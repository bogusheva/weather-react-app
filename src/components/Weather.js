import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Description from "./Description";

export default function Weather() {
  const initialData = {
    city: "",
    temperature: null,
    description: "",
    humidity: null,
    wind: null,
    icon: "",
  };
  const [data, setData] = useState(initialData);
  const [city, setCity] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
  const [activeMetric, setActiveMetric] = useState(true);

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      const apiKey = "f97f8eaebc5efe3fd907c0565c3a9148";
      let units = "metric";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
      axios
        .get(url)
        .then((response) => {
          setIsLoaded(true);
          setData({
            city: response.data.name,
            temperature: Math.round(response.data.main.temp),
            temperatureFahrenheit:
              Math.round((response.data.main.temp * 9) / 5) + 32,
            description: response.data.weather[0].description,
            humidity: Math.round(response.data.main.humidity),
            wind: response.data.wind.speed,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          });
        })
        .catch((e) => {
          setError("Something went wrong!");
          setIsLoaded(false);
        });
      setCity("");
      setError("");
      setActiveMetric(true);
    } else {
      setError("Enter the city!");
      setIsLoaded(false);
    }
  }

  function convertToFahrenheit() {
    setActiveMetric(false);
  }

  function convertToCelsius() {
    setActiveMetric(true);
  }

  return (
    <div className="weather">
      <Form
        city={city}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {isLoaded && (
        <Description
          data={data}
          convertToCelsius={convertToCelsius}
          convertToFahrenheit={convertToFahrenheit}
          activeMetric={activeMetric}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
