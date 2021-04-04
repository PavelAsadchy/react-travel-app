import { ReactElement, useEffect, useState } from 'react';

import { Currency } from '../../models/CountryList.model';
import { CurrencyRates } from '../../models/Currency.model';
import CountryService from '../../services/http.service';

type CurrencyConverterProps = {
  countryCurrencies: Currency[];
};

const CurrencyConverter = ({
  countryCurrencies,
}: CurrencyConverterProps): ReactElement => {
  const [currency, setCurrency] = useState(null as CurrencyRates);

  useEffect(() => {
    CountryService.fetchCurrency(
      countryCurrencies[0].code
    ).then((data: CurrencyRates) => setCurrency(data));
  }, [countryCurrencies]);

  if (!countryCurrencies) return <div>...loading</div>;

  return (
    <div>
      <div className="h4">Currency name:</div>
      <div className="h4">{`${countryCurrencies[0].name} ${countryCurrencies[0].symbol}`}</div>
      {currency && currency.rates ? (
        Object.entries(currency.rates).map((currencyPair: [string, number]) => (
          <div>
            <span>{currencyPair[0]}</span>
            <span>{currencyPair[1]}</span>
          </div>
        ))
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

export default CurrencyConverter;
