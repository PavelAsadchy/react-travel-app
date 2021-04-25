import { ReactElement } from 'react';

import { Country } from '../../models/CountryList.model';
import CapitalTime from '../CapitalTime/CapitalTime';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import Weather from '../Weather/Weather';

import './Widget.scss';

type WidgetProps = {
  countryData: Country;
};

const Widget = ({ countryData }: WidgetProps): ReactElement => {
  return (
    <div className="widget">
      {countryData && <CapitalTime countryData={countryData} />}
      {countryData && <Weather capital={countryData.capital} />}
      {countryData && (
        <CurrencyConverter countryCurrencies={countryData.currencies} />
      )}
    </div>
  );
};

export default Widget;
