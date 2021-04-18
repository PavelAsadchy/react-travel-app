import { ReactElement } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import { Country } from '../../models/CountryList.model';
import CountryCard from '../CountryCard/CountryCard';

import './RandomCards.scss';

type RandomCardsProps = {
  randomCards: Country[];
};

const RandomCards = ({ randomCards }: RandomCardsProps): ReactElement => {
  return (
    <div className="random-cards">
      <Carousel className="random-cards__carousel">
        {randomCards.map((item: Country) => (
          <Carousel.Item key={item.name}>
            <Link to={`/${item.name.toLocaleLowerCase()}`}>
              <CountryCard item={item} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default RandomCards;
