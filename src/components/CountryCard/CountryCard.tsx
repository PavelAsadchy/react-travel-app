import { Card } from 'react-bootstrap';

import { Country } from '../../models/CountryList.model';

import './CountryCard.scss';

type CountryCardProps = {
  item: Country;
};

const CountryCard = ({ item }: CountryCardProps) => {
  const { name, nativeName, capital, flag } = item;

  return (
      <Card>
        <Card.Img className="card__img" src={flag} variant="top" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{capital}</Card.Subtitle>
          <Card.Text>Native name: {nativeName}</Card.Text>
        </Card.Body>
      </Card>
  );
};

export default CountryCard;
