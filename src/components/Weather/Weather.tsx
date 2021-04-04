import { ReactElement, useEffect, useState } from 'react';

import { WeatherInfo } from '../../models/Weather.model';
import CountryService from '../../services/http.service';
import WeatherData from './WeatherData/WeatherData';

import 'bootstrap/dist/css/bootstrap.min.css';

type WeatherProps = {
  capital: string;
};

const Weather = ({ capital }: WeatherProps): ReactElement => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    CountryService.fetchWeather(capital).then((weatherInfo: WeatherInfo) =>
      setWeather(weatherInfo)
    );
  }, [capital]);

  return (
    <div className="h3">
      {weather ? <WeatherData weather={weather} /> : null}
    </div>
  );
};

export default Weather;
