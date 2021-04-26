import { ReactElement } from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from '../../consts/urls.const';
import { Country } from '../../models/CountryList.model';

type MapProps = {
  countryData: Country;
};

const containerStyle = {
  height: '400px',
};

const Map = ({ countryData }: MapProps): ReactElement => {
  const center = {
    lat: countryData.latlng[0],
    lng: countryData.latlng[1],
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap center={center} mapContainerStyle={containerStyle} zoom={5} />
    </LoadScript>
  );
};

export default Map;
