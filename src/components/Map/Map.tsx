import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Country } from '../../models/CountryList.model';

type MapProps = {
  countryData: Country;
};

const containerStyle = {
  width: '400px',
  height: '400px'
};

const Map = ({ countryData }: MapProps) => {

  const center = {
    lat: countryData.latlng[0],
    lng: countryData.latlng[1],
  };
  
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
      >
      </GoogleMap>
    </LoadScript>
  )};

export default Map;
