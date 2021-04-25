import { ReactElement, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import { YoutubeVideoResponse } from '../../models/AttractionInfo.model';
import CountryService from '../../services/http.service';

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
    <ReactPlayer
      controls
      height="100%"
      url={
        isVideoReceived ? youTubeUrl + video.items[0].id.videoId : '...Loading'
      }
      width="100%"
    />
  );
};

export default Video;
