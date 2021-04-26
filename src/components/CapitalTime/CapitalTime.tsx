import { ReactElement, useEffect, useState } from 'react';

import * as cityTimezones from 'city-timezones';

import { Country } from '../../models/CountryList.model';

import './CapitalTime.scss';

type CapitalTimeProps = {
  countryData: Country;
};

const CapitalTime = ({ countryData }: CapitalTimeProps): ReactElement => {
  const [time, setTime] = useState(null as string);

  useEffect(() => {
    const cityLookup = cityTimezones.lookupViaCity(countryData.capital);
    const cityTimeZone =
      cityLookup[0] && cityLookup[0].timezone ? cityLookup[0].timezone : 'UTC';
    const dateProperties: Intl.DateTimeFormatOptions = {
      timeZone: cityTimeZone,
      day: 'numeric',
      month: 'short',
      weekday: 'short',
      hour: 'numeric',
      hour12: false,
      minute: 'numeric',
      second: 'numeric',
    };
    const setTimer = setInterval(() => {
      setTime(
        new Date().toLocaleString('en', dateProperties).replace(/:/g, '-')
      );
    }, 1000);

    return () => clearInterval(setTimer);
  }, [countryData]);

  return (
    <div className="capital-time">
      <div className="capital-time__title">Capital Time:</div>
      <div className="capital-time__time">{`${time || '...loading'}`}</div>
    </div>
  );
};

export default CapitalTime;
