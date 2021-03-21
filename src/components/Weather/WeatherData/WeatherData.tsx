import { WeatherInfo } from '../../../models/Weather.model';

import './WeatherData.scss';

type WeatherInfoProps = {
  weather: WeatherInfo;
};

export const WeatherData = ({ weather }: WeatherInfoProps) => {
  return (
    <div className="weather">
      <div>Temperature: {weather.main.temp}</div>
      <div>{weather.weather[0].description}</div>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
    </div>
  );
};
