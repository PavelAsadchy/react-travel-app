import { ReactElement, useEffect, useState } from 'react';
import Slider from 'react-slick';

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
    null as JSX.Element[]
  );

  const { alpha2Code, capital } = countryData;

  useEffect(() => {
    const searchRadius = 15000;

    CountryService.fetchCapitalCoordinates(alpha2Code, capital)
      .then((coordinates: CapitalInfo) => {
        const { lon, lat } = coordinates;
        return CountryService.fetchCapitalAttractions(searchRadius, lon, lat);
      })
      .then((attractions: CapitalAttraction[]) => {
        if (!attractions) return <div>...loading</div>;

        return attractions.map((attraction: CapitalAttraction) => {
          return (
            <div key={attraction.xid}>
              <AttractionCard attraction={attraction} />
            </div>
          );
        });
      })
      .then((attractionList: JSX.Element[]) =>
        setCapitalAttractions(attractionList)
      );
  }, [alpha2Code, capital]);

  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
  };

  return (
    <div className="attractions__slider">
      <Slider {...sliderSettings}>{capitalAttractions}</Slider>
    </div>
  );
};

export default Attractions;
