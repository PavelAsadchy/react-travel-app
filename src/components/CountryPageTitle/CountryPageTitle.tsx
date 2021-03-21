import { Country } from '../../models/CountryList.model';

import './CountryPageTitle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

type CountryPageTitleProps = {
  countryData: Country;
};

const CountryPageTitle = ({ countryData }: CountryPageTitleProps) => {
  if (!countryData) return <div>...loading</div>;
  const { name, flag, capital } = countryData;

  return (
    <div
      className="country__heading"
      style={{
        width: '400px',
        height: '400px',
        backgroundImage: `url(${flag})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="country__heading-info">
        <h2 className="country__name">
          {name}
          <br />
        </h2>
        <h3 className="country__capital">{capital}</h3>
      </div>
    </div>
  );
};

export default CountryPageTitle;
