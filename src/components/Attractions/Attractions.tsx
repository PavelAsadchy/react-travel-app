import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { AttractionInfo } from '../../models/AttractionInfo.model';
import { CountryService } from '../../services/http.service';
import AttractionCard from '../AttractionCard/AttractionCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Attractions.scss';

import { Country } from '../../models/CountryList.model';

type AttractionsProps = {
  countryData: Country;
};

const Attractions = ({ countryData }: AttractionsProps) => {
  const [capitalAttractions, setCapitalAttractions] = useState(null);
  const { alpha2Code, capital } = countryData;

  useEffect(() => {
    const searchRadius = 15000;

    CountryService.fetchCapitalCoordinates(alpha2Code, capital)
      .then((response) => response.json())
      .then((coordinates) =>
        CountryService.fetchCapitalAttractions(searchRadius, coordinates.lon, coordinates.lat)
          .then((response) => response.json())
          .then((attractions) => setCapitalAttractions(attractions))
      );
  }, []);

  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
  };

  let attractionsList = [];

  if (capitalAttractions) {
    attractionsList = capitalAttractions.map((attraction: AttractionInfo) => {
      return (
        <div key={attraction.xid}>
          <AttractionCard attraction={attraction} />
        </div>
      );
    });
  }

  return (
    <div className="attractions__slider">
      <Slider {...sliderSettings}>{attractionsList}</Slider>
    </div>
  );
};

export default Attractions;
