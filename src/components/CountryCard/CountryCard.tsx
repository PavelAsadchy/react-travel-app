import { ReactElement } from 'react';
import { Card } from 'react-bootstrap';

import { Country } from '../../models/CountryList.model';

import './CountryCard.scss';

type CountryCardProps = {
  item: Country;
};

const CountryCard = ({ item }: CountryCardProps): ReactElement => {
  const { name, nativeName, capital, flag } = item;

  return (
    <Card className="country-card">
      <Card.Img className="country-card__img" src={flag} />
      <Card.ImgOverlay>
        <Card.Title className="country-card__title">{name}</Card.Title>
        <Card.Subtitle className="country-card__subtitle mb-2 text-muted">
          {capital}
        </Card.Subtitle>
        <Card.Text className="country-card__text">
          Native name: {nativeName}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CountryCard;
