import { useEffect, useState } from 'react';

import { WeatherInfo } from '../../models/Weather.model';
import { CountryService } from '../../services/http.service';
import { WeatherData } from './WeatherData/WeatherData';

import 'bootstrap/dist/css/bootstrap.min.css';

type WeatherProps = {
  capital: string;
};

const Weather = ({ capital }: WeatherProps) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    CountryService.fetchWeather(capital)
      .then((response) => response.json())
      .then((weatherInfo: WeatherInfo) => setWeather(weatherInfo));
  }, []);

  return <div className="h3">{weather ? <WeatherData weather={weather} /> : null}</div>;
};

export default Weather;
