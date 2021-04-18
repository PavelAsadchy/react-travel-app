import { ReactElement, useState } from 'react';

import { Country } from '../../models/CountryList.model';
import Header from '../Header/Header';
import SearchResults from '../SearchResult/SearchResults';
import WorldMapBlock from '../WorldMapBlock/WorldMapBlock';

import './MainPage.scss';

type MainPageProps = {
  countriesList: Country[];
  randomCountriesList: Country[];
};

const MainPage = ({
  countriesList,
  randomCountriesList,
}: MainPageProps): ReactElement => {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (value: string) => setSearchValue(value);

  const header = (
    <Header
      isMainPage
      searchHandler={searchHandler}
      searchValue={searchValue}
    />
  );

  if (!countriesList || !randomCountriesList) return <div>{header}</div>;

  const searchResultCountries = countriesList.filter(
    (country: Country) =>
      country.name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase()) ||
      country.capital
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
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
    isoCode: string
  ): any => {
    const clickedCountry = countriesList.find(
      (country: Country) =>
        country.alpha2Code.toLocaleLowerCase() === isoCode.toLocaleLowerCase()
    );
    setSearchValue(clickedCountry.name);
  };

  return (
    <div className="main-page">
      {header}
      <div className="main-page__content">
        <WorldMapBlock
          countries={worldMapData}
          onClickAction={onCountryClickHandler}
        />
        {searchValue ? (
          <SearchResults searchResult={searchResultCountries} />
        ) : (
          <SearchResults searchResult={randomCountriesList} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
