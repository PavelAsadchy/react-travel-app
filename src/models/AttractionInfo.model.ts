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
