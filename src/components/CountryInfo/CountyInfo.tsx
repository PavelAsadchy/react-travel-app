import { ReactElement } from 'react';

import { CountryDetail } from '../../models/CountryInfo.model';

import './CountryInfo.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

type CountryInfoProps = {
  countryDetail: CountryDetail;
};

const CountryInfo = ({ countryDetail }: CountryInfoProps): ReactElement => {
  if (!countryDetail) return <div>...loading</div>;

  const createMarkup = () => {
    return { __html: countryDetail.extract };
  };

  return (
    <div className="country">
      <div
        className="country__description lead"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>
  );
};

export default CountryInfo;
