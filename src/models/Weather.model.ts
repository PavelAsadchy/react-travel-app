export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherInfo {
  base: string;
  clouds: {
    all: number,
  };
  cod: number;
  coord: {
    lon: number,
    lat: number,
  };
  dt: number;
  id: number;
  main: {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  };
  name: string;
  sys: {
    country: string,
    id: number,
    sunrise: Date,
    sunset: Date,
    type: number,
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    deg: number,
    gust: number,
    speed: number,
  }
}