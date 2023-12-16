import React from "react";

export default function Description({
  data,
  convertToCelsius,
  convertToFahrenheit,
  activeMetric,
  tempCity,
}) {
  return (
    <div className="description">
      <ul>
        <li className="city">{data.city}</li>
        <li className="description-text">{data.description}</li>
        <li>
          <img src={data.icon} alt={data.description} />
        </li>
      </ul>
      <ul className="description-additional">
        <li className="city">
          {activeMetric ? data.temperature : data.temperatureFahrenheit}{" "}
          <span
            className={activeMetric ? "active" : undefined}
            onClick={convertToCelsius}
          >
            °C
          </span>
          {" | "}
          <span
            className={!activeMetric ? "active" : undefined}
            onClick={convertToFahrenheit}
          >
            °F
          </span>
        </li>
        <li className="description-text">Humidity: {data.humidity}%</li>
        <li className="description-text">Wind: {data.wind} km/h</li>
      </ul>
    </div>
  );
}
