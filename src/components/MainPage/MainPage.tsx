import { ReactElement, useState } from 'react';

import { Country } from '../../models/CountryList.model';
import Header from '../Header/Header';
import RandomCards from '../RandomCards/RandomCards';
import SearchResults from '../SearchResult/SearchResults';
import SelectedCountryModal from '../SelectedCountryModal/SelectedCountryModal';
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
  const [selectedCountryOnMap, setSelectedCountryOnMap] = useState(
    null as Country
  );
  const [modalShow, setModalShow] = useState(false);

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

    setSelectedCountryOnMap(clickedCountry);
    setModalShow(true);
  };

  const onModalHide = (): void => {
    setModalShow(false);
    setSelectedCountryOnMap(null);
  };

  return (
    <div className="main-page">
      {header}
      {searchValue ? (
        <SearchResults searchResult={searchResultCountries} />
      ) : (
        <div className="main-page__content">
          <WorldMapBlock
            countries={worldMapData}
            onClickAction={onCountryClickHandler}
          />
          {selectedCountryOnMap ? (
            <SelectedCountryModal
              onHide={onModalHide}
              selectedCountry={selectedCountryOnMap}
              show={modalShow}
            />
          ) : (
            <RandomCards randomCards={randomCountriesList} />
          )}
        </div>
      )}
    </div>
  );
};

export default MainPage;
