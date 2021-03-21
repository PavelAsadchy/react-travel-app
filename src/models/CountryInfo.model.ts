interface QueryNormalized {
  from: string;
  to: string;
};

export interface CountryDetail {
  extract: string;
  ns: string;
  pageid: number;
  title: String;
};

interface CountryInfoPages {
  [key: string]: CountryDetail;
};

interface CountryInfoQuery {
  normalized: QueryNormalized[];
  pages: CountryInfoPages;
}

export interface CountryInfoResponse {
  batchcomplete: string;
  query: CountryInfoQuery;
  warnings: {
    extracts: string;
  };
}