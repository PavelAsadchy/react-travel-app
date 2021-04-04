const openTripMapApiKey =
  '5ae2e3f221c38a28845f05b65947648325a329e2626a4b6b7f12a1df';
const openTripBaseUrl = 'https://api.opentripmap.com/0.1/';
const youtubeApiKey = 'AIzaSyDoSce_kXLM52dh1hmFXUheB8pzSxbEXGs';
const apiWeatherBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const weatherApiKey = '492003bfd44fb7dbe75df7d92a5e55d1';
const currencyBaseUrl = 'https://api.exchangerate.host/latest?';
export const GOOGLE_MAPS_API_KEY = 'AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8';

const URLS = {
  COUNTRIES_ALL: 'https://restcountries.eu/rest/v2/',
  COUNTRY_BY_NAME: 'https://restcountries.eu/rest/v2/name/',
  COUNTRY_WIKI: (lang: string): string =>
    `https://${lang}.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=`,
  COUNTRY_CAPITAL_COORDS: (
    countryCode: string,
    capital: string,
    lang: string
  ): string =>
    `${openTripBaseUrl}${lang}/places/geoname?name=${capital}&country=${countryCode}&apikey=${openTripMapApiKey}`,
  CAPITAL_ATTRACTION: (
    radius: number,
    lon: number,
    lat: number,
    lang: string
  ): string =>
    // eslint-disable-next-line max-len
    `${openTripBaseUrl}${lang}/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&rate=3&format=json&limit=6&apikey=${openTripMapApiKey}`,
  CAPITAL_ATTRACTION_INFO: (xid: string, lang: string): string =>
    `${openTripBaseUrl}${lang}/places/xid/${xid}?apikey=${openTripMapApiKey}`,
  YOUTUBE: (country: string): string => {
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search?';
    const props = `key=${youtubeApiKey}&type=video&part=snippet&maxResults=1&q=${country} attractions`;
    return baseUrl + props;
  },
  WEATHER: (cityName: string): string =>
    `${apiWeatherBaseUrl}${cityName}&appid=${weatherApiKey}&units=metric`,
  CURRENCY: (currencyCode: string): string =>
    `${currencyBaseUrl}base=${currencyCode}&symbols=USD,EUR`,
};

export default URLS;
