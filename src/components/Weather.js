import React from "react";

import AppLayout from "./AppLayout";
import WeatherSearch from "./WeatherSearch";

import * as weatherIcons from "../icons";

export default function Weather(props) {
  const { city, currentWeather, forecast, onCityChange, error } = props;
  if (currentWeather && forecast) {
    const prefix = "wi wi-";
    const icon = prefix + weatherIcons.default[currentWeather.icon_id].icon;

    return (
      <div>
        <WeatherSearch city={city} onCityChange={onCityChange} error={error} />
        <AppLayout
          currentWeather={currentWeather}
          forecast={forecast}
          icon={icon}
        />
      </div>
    );
  }
}
