import { useState } from 'react';

import { Country } from '../../models/CountryList.model';
import Header from '../Header/Header';
import { SearchResults } from '../SearchResult/SearchResults';
import { WorldMapBlock } from '../WorldMapBlock/WorldMapBlock';

type MainPageProps = {
  countriesList: Country[];
  randomCountriesList: Country[];
};

const MainPage = ({ countriesList, randomCountriesList }: MainPageProps) => {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (value: string) => setSearchValue(value);

  const header = <Header isMainPage searchHandler={searchHandler} searchValue={searchValue} />;

  if (!countriesList || !randomCountriesList) return <div>{header}</div>;

  const searchResultCountries = countriesList.filter(
    (country: Country) =>
      country.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      country.capital.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const worldMapData = countriesList.map((country: Country) => {
    return {
      country: country.alpha2Code,
      value: country.population,
    };
  });

  const onCountryClickHandler = (
    event: React.MouseEvent<SVGElement, Event>,
    countryName: string,
    isoCode: string,
    value: string,
    prefix?: string,
    suffix?: string
  ) => {
    const clickedCountry = countriesList.find(
      (country: Country) => country.alpha2Code.toLocaleLowerCase() === isoCode.toLocaleLowerCase()
    );
    setSearchValue(clickedCountry.name);
  };

  return (
    <div>
      {header}
      {searchValue ? (
        <SearchResults searchResult={searchResultCountries} />
      ) : (
        <SearchResults searchResult={randomCountriesList} />
      )}
      <WorldMapBlock countries={worldMapData} onClickAction={onCountryClickHandler} />
    </div>
  );
};

export default MainPage;
