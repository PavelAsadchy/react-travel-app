import { useEffect, useState } from 'react';

import { CountryService } from '../../services/http.service';

const CurrencyConverter = ({ countryCurrencies }: any) => {
  if (!countryCurrencies) return <div>...loading</div>;

  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    CountryService.fetchCurrency(countryCurrencies[0].code)
      .then((response) => response.json())
      .then((data) => {
        setCurrency(data);
      });
  }, []);

  const currencyRates = [];

  if (currency && currency.rates) {
    for (const [key, value] of Object.entries(currency.rates)) {
      const val = value as number;
      const component = (
        <div key={key}>
          {key}: {val.toFixed(2)}
        </div>
      );

      currencyRates.push(component);
    }
  }

  return (
    <div>
      <div className="h4">Currency name:</div>
      <div className="h4">{`${countryCurrencies[0].name} ${countryCurrencies[0].symbol}`}</div>
      <div className="h4">{currencyRates || '...loading'}</div>
    </div>
  );
};

export default CurrencyConverter;
