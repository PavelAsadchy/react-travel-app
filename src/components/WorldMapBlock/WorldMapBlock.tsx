import { ReactElement } from 'react';
import { WorldMap } from 'react-svg-worldmap';

import { WordlMapData } from '../../models/CountryList.model';

import './WorldMapBlock.scss';

type WorldMapBlockProps = {
  countries: WordlMapData[];
  onClickAction: (
    event: React.MouseEvent<SVGElement, Event>,
    countryName: string,
    isoCode: string,
    value: string,
    prefix?: string,
    suffix?: string
  ) => any;
};

const WorldMapBlock = ({
  countries,
  onClickAction,
}: WorldMapBlockProps): ReactElement => {
  return (
    <div
      className="world-map"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <WorldMap
        backgroundColor="03accd"
        color="#333"
        data={countries}
        onClickFunction={onClickAction}
        size="xxl"
        title="Click on country to know more"
        value-suffix="people"
      />
    </div>
  );
};

export default WorldMapBlock;
