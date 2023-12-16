import React from "react";
import Weather from "./components/Weather";

import { formatDate } from "./helpers/helpers.js";

export default function App() {
  let currentDate = new Date();

  return (
    <>
      <div className="App">
        <h1>Weather App</h1>
        <h4>{formatDate(currentDate)}</h4>
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
