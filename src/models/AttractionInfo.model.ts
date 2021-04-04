interface WikipediaExtras {
  html: string;
  text: string;
  title: string;
}

export interface AttractionInfo {
  name: string;
  kinds: string;
  xid: string;
  image: string;
  wikipedia_extracts: WikipediaExtras;
}

export interface CapitalInfo {
  country: string;
  lat: number;
  lon: number;
  name: string;
  population: number;
  status: string;
  timezone: string;
}

export interface CapitalAttraction {
  dist: number;
  kinds: string;
  name: string;
  point: {
    lon: number;
    lat: number;
  };
  rate: number;
  wikidata: string;
  xid: string;
}

export interface CapitalAttractionInfo {
  address: any;
  bbox?: any;
  image: string;
  kinds: string;
  name: string;
  osm: string;
  otm: string;
  point: {
    lon: number;
    lat: number;
  };
  preview: {
    height: number;
    width: number;
    source: string;
  };
  rate: string;
  sourses: {
    geometry: string;
    attributes: string[];
  };
  wikidata: string;
  wikipedia: string;
  wikipedia_extracts: {
    html: string;
    text: string;
    title: string;
  };
  xid: string;
  error?: any;
}

interface YotubeVideoThumbnail {
  url: string;
  width: number;
  height: number;
}

interface YotubeVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: YotubeVideoThumbnail;
    mediun?: YotubeVideoThumbnail;
    high?: YotubeVideoThumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface YotubeVideo {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: YotubeVideoSnippet;
}

export interface YoutubeVideoResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YotubeVideo[];
}
