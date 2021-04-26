import { ReactElement, useEffect, useState } from 'react';

import { Currency } from '../../models/CountryList.model';
import { CurrencyRates } from '../../models/Currency.model';
import CountryService from '../../services/http.service';

import './CurrencyConverter.scss';

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
    <div className="currency-converter">
      <div className="currency-converter__info">
        <div className="currency-converter__title">Local currency:</div>
        <div className="currency-converter__name">
          {`${countryCurrencies[0].name} (${countryCurrencies[0].symbol}`})
        </div>
      </div>
      <div className="currency-converter__rates">
        {currency && currency.rates ? (
          Object.entries(currency.rates).map(
            (currencyPair: [string, number]) => (
              <div className="currency-converter__rates-pair">
                <span>1 {currencyPair[0]} =</span>
                <span>
                  {(1 / currencyPair[1]).toFixed(2)}{' '}
                  {countryCurrencies[0].symbol}
                </span>
              </div>
            )
          )
        ) : (
          <div>...Loading</div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
