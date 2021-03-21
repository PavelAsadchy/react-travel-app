import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { CountryDetail, CountryInfoResponse } from '../../models/CountryInfo.model';
import { CountryService } from '../../services/http.service';
import Attractions from '../Attractions/Attractions';
import CapitalTime from '../CapitalTime/CapitalTime';
import CountryInfo from '../CountryInfo/CountyInfo';
import CountryPageTitle from '../CountryPageTitle/CountryPageTitle';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Video from '../Video/Video';
import Weather from '../Weather/Weather';

import './CountryPage.scss';

const CountryPage = () => {
  const [countryDetail, setCountryDetail] = useState({} as CountryDetail);
  const [countryData, setCountryData] = useState(null);

  const location = useLocation();
  const countryName = location.pathname.split('/')[1];

  useEffect(() => {
    CountryService.fetchCountryInfoByName(countryName)
      .then((response) => response.json())
      .then((countryInfo: CountryInfoResponse) => setCountryDetail(Object.values(countryInfo.query.pages)[0]));

    CountryService.fetchCountry(countryName)
      .then((response) => response.json())
      .then((country) => setCountryData(country[0]));
  }, []);
  console.log(countryData);
  return (
    <div className="country-page">
      <Header isMainPage={false} />
      <Container>
        <Row>
          <div className="country-page__widget">
            {countryData ? <CapitalTime countryData={countryData} /> : null}
            {countryData && <Weather capital={countryData.capital} />}
            {countryData && <CurrencyConverter countryCurrencies={countryData.currencies} />}
          </div>
          <CountryPageTitle countryData={countryData} />
          {countryData ? <Map countryData={countryData} /> : null}
        </Row>
      </Container>
      <CountryInfo countryDetail={countryDetail} />
      <Video countryName={countryName} />
      {countryData ? <Attractions countryData={countryData} /> : null}
    </div>
  );
};

export default CountryPage;
