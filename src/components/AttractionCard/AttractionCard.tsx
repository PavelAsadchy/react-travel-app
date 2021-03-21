import { useEffect, useState } from 'react';

import { AttractionInfo } from '../../models/AttractionInfo.model';
import { CountryService } from '../../services/http.service';

import './AttractionCard.scss';

type AttractionCardProps = {
  attraction: AttractionInfo;
};

const AttractionCard = ({ attraction }: AttractionCardProps) => {
  const [attractionInfo, setAttractionInfo] = useState(null);

  useEffect(() => {
    CountryService.fetchAttractionInfo(attraction.xid)
      .then((response) => response.json())
      .then((info) => setAttractionInfo(info));
  }, []);

  const errorText = '...loading';
  const isInfoReceived = attractionInfo && !attractionInfo.error;
  const text = isInfoReceived ? attractionInfo.wikipedia_extracts.text : errorText;
  const imageUrl = isInfoReceived ? attractionInfo.preview.source : '';
  const kinds = attraction.kinds.replace(/_/g, ' ').replace(/,/g, ', ');

  return (
    <div className="attraction">
      <div className="attraction__info">
        <h2>{attraction.name}</h2>
        <h3>{kinds}</h3>
        <div className="attraction__text">{text}</div>
      </div>

      <img className="attraction__image" src={imageUrl} />
    </div>
  );
};

export default AttractionCard;
