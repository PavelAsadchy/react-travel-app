import URLS from '../consts/urls.const';
import {
  CapitalAttraction,
  CapitalAttractionInfo,
  CapitalInfo,
  YoutubeVideoResponse,
} from '../models/AttractionInfo.model';
import { CountryInfoResponse } from '../models/CountryInfo.model';
import { Country } from '../models/CountryList.model';
import { CurrencyRates } from '../models/Currency.model';
import { WeatherInfo } from '../models/Weather.model';

const CountryService = {
  fetchAllCountries: async (): Promise<Country[]> =>
    fetch(URLS.COUNTRIES_ALL).then((resp) => resp.json()),

  fetchCountry: async (country: string): Promise<Country[]> =>
    fetch(URLS.COUNTRY_BY_NAME + country).then((resp) => resp.json()),

  fetchCountryInfoByName: async (
    country: string,
    lang = 'en'
  ): Promise<CountryInfoResponse> => {
    let normalizedCountryName: string;

    switch (country) {
      case 'russian federation':
        normalizedCountryName = 'russia';
        break;

      case 'united states of america':
        normalizedCountryName = 'United_States';
        break;

      default:
        normalizedCountryName = country;
    }

    normalizedCountryName = normalizedCountryName
      .split(' ')
      .map((word: string) => word[0].toUpperCase() + word.slice(1))
      .join(' ');

    return fetch(URLS.COUNTRY_WIKI(lang) + normalizedCountryName).then((resp) =>
      resp.json()
    );
  },

  fetchCapitalCoordinates: async (
    countryCode: string,
    capital: string,
    lang = 'en'
  ): Promise<CapitalInfo> =>
    fetch(
      URLS.COUNTRY_CAPITAL_COORDS(countryCode, capital, lang)
    ).then((resp) => resp.json()),

  fetchCapitalAttractions: async (
    radius: number,
    lon: number,
    lat: number,
    lang = 'en'
  ): Promise<CapitalAttraction[]> =>
    fetch(URLS.CAPITAL_ATTRACTION(radius, lon, lat, lang)).then((resp) =>
      resp.json()
    ),

  fetchAttractionInfo: async (
    xid: string,
    lang = 'en'
  ): Promise<CapitalAttractionInfo> =>
    fetch(URLS.CAPITAL_ATTRACTION_INFO(xid, lang)).then((resp) => resp.json()),

  fetchAttractionVideo: async (
    country: string
  ): Promise<YoutubeVideoResponse> =>
    fetch(URLS.YOUTUBE(country)).then((resp) => resp.json()),

  fetchWeather: async (cityName: string): Promise<WeatherInfo> =>
    fetch(URLS.WEATHER(cityName)).then((resp) => resp.json()),

  fetchCurrency: async (currencyCode: string): Promise<CurrencyRates> =>
    fetch(URLS.CURRENCY(currencyCode)).then((resp) => resp.json()),
};

export default CountryService;
