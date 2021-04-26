import { ReactElement, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import { YoutubeVideoResponse } from '../../models/AttractionInfo.model';
import CountryService from '../../services/http.service';

import './Video.scss';

type VideoProps = {
  countryName: string;
};

const Video = ({ countryName }: VideoProps): ReactElement => {
  const [video, setVideo] = useState(null as YoutubeVideoResponse);

  useEffect(() => {
    CountryService.fetchAttractionVideo(
      countryName
    ).then((videoInfo: YoutubeVideoResponse) => setVideo(videoInfo));
  }, [countryName]);

  const youTubeUrl = 'https://www.youtube.com/watch?v=';
  const isVideoReceived = video && video.items;

  return (
    <div className="video">
      <ReactPlayer
        controls
        height="100%"
        url={
          isVideoReceived
            ? youTubeUrl + video.items[0].id.videoId
            : '...Loading'
        }
        width="100%"
      />
    </div>
  );
};

export default Video;
