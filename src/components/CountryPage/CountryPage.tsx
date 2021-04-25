import { ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import {
  CountryDetail,
  CountryInfoResponse,
} from '../../models/CountryInfo.model';
import { Country } from '../../models/CountryList.model';
import CountryService from '../../services/http.service';
import Attractions from '../Attractions/Attractions';
import CountryInfo from '../CountryInfo/CountyInfo';
import CountryPageTitle from '../CountryPageTitle/CountryPageTitle';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Video from '../Video/Video';
import Widget from '../Widget/Widget';

import './CountryPage.scss';

const CountryPage = (): ReactElement => {
  const [countryDetail, setCountryDetail] = useState({} as CountryDetail);
  const [countryData, setCountryData] = useState(null as Country);

  const location = useLocation();
  const countryName = location.pathname.split('/')[1];

  useEffect(() => {
    CountryService.fetchCountryInfoByName(
      countryName
    ).then((countryInfo: CountryInfoResponse) =>
      setCountryDetail(Object.values(countryInfo.query.pages)[0])
    );

    CountryService.fetchCountry(countryName).then((country: Country[]) =>
      setCountryData(country[0])
    );
  }, [countryName]);

  return (
    <div className="country-page">
      <Header isMainPage={false} />
      {countryData && (
        <div className="country-page__info">
          <div className="country-page__aside">
            <CountryPageTitle countryData={countryData} />
            <Widget countryData={countryData} />
            {countryData ? <Map countryData={countryData} /> : null}
          </div>
          <div className="country-page__text">
            <CountryInfo countryDetail={countryDetail} />
          </div>
        </div>
      )}
      <div className="country-page__video">
        <Video countryName={countryName} />
      </div>
      {countryData ? <Attractions countryData={countryData} /> : null}
    </div>
  );
};

export default CountryPage;
