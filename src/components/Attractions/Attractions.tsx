import { ReactElement, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import {
  CapitalAttraction,
  CapitalInfo,
} from '../../models/AttractionInfo.model';
import { Country } from '../../models/CountryList.model';
import CountryService from '../../services/http.service';
import AttractionCard from '../AttractionCard/AttractionCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Attractions.scss';

type AttractionsProps = {
  countryData: Country;
};

const Attractions = ({ countryData }: AttractionsProps): ReactElement => {
  const [capitalAttractions, setCapitalAttractions] = useState(
    null as CapitalAttraction[]
  );

  const { alpha2Code, capital } = countryData;

  useEffect(() => {
    const searchRadius = 15000;

    CountryService.fetchCapitalCoordinates(alpha2Code, capital)
      .then((coordinates: CapitalInfo) => {
        const { lon, lat } = coordinates;
        return CountryService.fetchCapitalAttractions(searchRadius, lon, lat);
      })
      .then((attractions: CapitalAttraction[]) =>
        setCapitalAttractions(attractions)
      );
  }, [alpha2Code, capital]);

  return (
    <>
      {capitalAttractions && capitalAttractions.length && (
        <Carousel className="attractions__carousel">
          {capitalAttractions.map((item: CapitalAttraction) => (
            <Carousel.Item key={item.name}>
              <AttractionCard item={item} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Attractions;
