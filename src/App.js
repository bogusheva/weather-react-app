import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Weather App</h1>
        <Weather />
      </div>
      <div className="footer">
        SheCodes Project -{" "}
        <a
          href="https://github.com/bogusheva/weather-react-app"
          rel="noreferrer"
          target="_blank"
        >
          open source code
        </a>{" "}
        here
      </div>
    </>
  );
}
