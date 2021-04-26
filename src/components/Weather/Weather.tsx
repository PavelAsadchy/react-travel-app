import { ReactElement, useEffect, useState } from 'react';

import { WeatherInfo } from '../../models/Weather.model';
import CountryService from '../../services/http.service';

import './Weather.scss';

type WeatherProps = {
  capital: string;
};

const Weather = ({ capital }: WeatherProps): ReactElement => {
  const [weather, setWeather] = useState(null as WeatherInfo);

  useEffect(() => {
    CountryService.fetchWeather(capital).then((weatherInfo: WeatherInfo) =>
      setWeather(weatherInfo)
    );
  }, [capital]);

  return (
    <>
      {weather && (
        <div className="weather">
          <div className="weather__description">
            <img
              alt="weather_icon"
              className="weather__description-icon"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
            <div className="weather__description-text">
              {weather.weather[0].description}
            </div>
          </div>
          <div className="weather__temperature">
            {weather.main.temp.toFixed(0)} ℃
          </div>
          <div className="weather__additional">
            <div>Feels like: {weather.main.feels_like.toFixed(0)} ℃</div>
            <div>Humidity: {weather.main.humidity} %</div>
            <div>Wind speed: {weather.wind.speed} m/s</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
