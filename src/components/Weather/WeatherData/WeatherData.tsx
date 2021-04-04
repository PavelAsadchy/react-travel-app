import { ReactElement } from 'react';

import { WeatherInfo } from '../../../models/Weather.model';

import './WeatherData.scss';

type WeatherInfoProps = {
  weather: WeatherInfo;
};

const WeatherData = ({ weather }: WeatherInfoProps): ReactElement => {
  return (
    <div className="weather">
      <div>Temperature: {weather.main.temp}</div>
      <div>{weather.weather[0].description}</div>
      <img
        alt="weather_icon"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
    </div>
  );
};

export default WeatherData;
