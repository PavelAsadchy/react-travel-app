const openTripMapApiKey =
  '5ae2e3f221c38a28845f05b65947648325a329e2626a4b6b7f12a1df';

export const CountryService = {
  fetchAllCountries: async () => {
    const apiCountriesUrl = 'https://restcountries.eu/rest/v2/';
    return fetch(apiCountriesUrl);
  },

  fetchCountry: async (country: string) => {
    const apiCountriesUrl = `https://restcountries.eu/rest/v2/name/${country}`;
    return fetch(apiCountriesUrl);
  },

  fetchCountryInfoByName: async (country: string, lang = 'en') => {
    if (country === 'russian federation') {
      return fetch(`https://${lang}.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=russia`);
    }

    if (country === 'united states of america') {
      return fetch(`https://${lang}.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=United_States`);
    }

    const apiCountryInfoUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${country}`;
    return fetch(apiCountryInfoUrl);
  },

  fetchCapitalCoordinates: async (
    countryCode: string,
    capital: string,
    lang = 'en'
  ) => {
    const url = `https://api.opentripmap.com/0.1/${lang}/places/geoname?name=${capital}&country=${countryCode}&apikey=${openTripMapApiKey}`;
    return fetch(url);
  },

  fetchCapitalAttractions: async (
    radius: number,
    lon: number,
    lat: number,
    lang = 'en'
  ) => {
    const url = `https://api.opentripmap.com/0.1/${lang}/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&rate=3&format=json&limit=6&apikey=${openTripMapApiKey}`;
    return fetch(url);
  },

  fetchAttractionInfo: async (xid: string, lang = 'en') => {
    const url = `https://api.opentripmap.com/0.1/${lang}/places/xid/${xid}?apikey=${openTripMapApiKey}`;
    return fetch(url);
  },

  fetchAttractionVideo: async (country: string) => {
    const apiKey = 'AIzaSyDoSce_kXLM52dh1hmFXUheB8pzSxbEXGs';
    const url = `https://www.googleapis.com/youtube/v3/search?`;
    const properties = `key=${apiKey}&type=video&part=snippet&maxResults=1&q=${country} attractions`;
    return fetch(url + properties);
  },
  
  fetchWeather: async (cityName: string) => {
    const apiWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const apiKey = '492003bfd44fb7dbe75df7d92a5e55d1';
    return fetch(`${apiWeatherUrl}${cityName}&appid=${apiKey}&units=metric`);
  },

  fetchCurrency: async (countryCode: string) => {
    const url = `https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,EUR,${countryCode}`;
    return fetch(url);
  },
};
