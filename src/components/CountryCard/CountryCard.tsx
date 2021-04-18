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
    <Card>
      <Card.Img className="card__img" src={flag} />
      <Card.ImgOverlay>
        <Card.Title className="card__title">{name}</Card.Title>
        <Card.Subtitle className="card__subtitle mb-2 text-muted">
          {capital}
        </Card.Subtitle>
        <Card.Text className="card__text">Native name: {nativeName}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CountryCard;
