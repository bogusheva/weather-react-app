import React from "react";

export default function Description({ data }) {
  return (
    <ul>
      <li>Temperature: {data.temperature}°C.</li>
      <li>Description: {data.description}</li>
      <li>Humidity: {data.humidity}%</li>
      <li>Wind: {data.wind}km/h</li>
      <li>
        <img src={data.icon} alt={data.description} />
      </li>
    </ul>
  );
}
