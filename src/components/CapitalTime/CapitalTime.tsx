import { useEffect, useState } from 'react';

import * as cityTimezones from 'city-timezones';

import { Country } from '../../models/CountryList.model';

import 'bootstrap/dist/css/bootstrap.min.css';

type CapitalTimeProps = {
  countryData: Country;
};

const CapitalTime = ({ countryData }: CapitalTimeProps) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const cityLookup = cityTimezones.lookupViaCity(countryData.capital);

    const cityTimeZone = cityLookup[0] && cityLookup[0].timezone ? cityLookup[0].timezone : 'UTC';
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

    setInterval(() => {
      setTime(new Date().toLocaleString('en', dateProperties).replace(/:/g, '-'));
    }, 1000);
  }, []);

  return (
    <div>
      <div className="h3">Capital Time:</div>
      <div className="h4">{`${time || '...loading'}`}</div>
    </div>
  );
};

export default CapitalTime;
