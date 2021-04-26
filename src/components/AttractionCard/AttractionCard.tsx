import { ReactElement, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import { CapitalAttraction } from '../../models/AttractionInfo.model';
import CountryService from '../../services/http.service';

import './AttractionCard.scss';

type AttractionCardProps = {
  item: CapitalAttraction;
};

const AttractionCard = ({ item }: AttractionCardProps): ReactElement => {
  const [attractionInfo, setAttractionInfo] = useState(null);

  useEffect(() => {
    CountryService.fetchAttractionInfo(item.xid).then((info) =>
      setAttractionInfo(info)
    );
  }, [item]);

  const errorText = '...loading';
  const isInfoReceived = attractionInfo && !attractionInfo.error;
  const text = isInfoReceived
    ? attractionInfo.wikipedia_extracts.text
    : errorText;
  const imageUrl = isInfoReceived ? attractionInfo.preview.source : '';
  const kinds = item.kinds.replace(/_/g, ' ').replace(/,/g, ', ');

  return (
    <Card className="attraction-card">
      <Card.Img className="attraction-card__img" src={imageUrl} />
      <Card.ImgOverlay>
        <Card.Body className="attraction-card__body">
          <Card.Title className="attraction-card__title">
            {item.name}
          </Card.Title>
          <Card.Subtitle className="attraction-card__subtitle mb-2 text-muted">
            {kinds}
          </Card.Subtitle>
          <Card.Text className="attraction-card__text">{text}</Card.Text>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default AttractionCard;
