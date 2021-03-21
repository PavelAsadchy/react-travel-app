import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import { CountryService } from '../../services/http.service';

import './Video.scss';

type VideoProps = {
  countryName: string;
};

const Video = ({ countryName }: VideoProps) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    CountryService.fetchAttractionVideo(countryName)
      .then((response) => response.json())
      .then((info) => setVideo(info));
  }, []);

  const youTubeUrl = 'https://www.youtube.com/watch?v=';
  const isVideoReceived = video && video.items;

  return (
    <div className="video">
      <ReactPlayer controls url={isVideoReceived ? youTubeUrl + video.items[0].id.videoId : '...Loading'} />
    </div>
  );
};

export default Video;
