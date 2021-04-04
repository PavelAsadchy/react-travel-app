import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Country } from '../../models/CountryList.model';
import CountryCard from '../CountryCard/CountryCard';

import './SearchResults.scss';

type SearchResultsProps = {
  searchResult: Country[];
};

const SearchResults = ({ searchResult }: SearchResultsProps): ReactElement => {
  return (
    <div className="search-container">
      {searchResult.map((item: Country) => (
        <div key={item.name}>
          <Link to={`/${item.name.toLocaleLowerCase()}`}>
            <CountryCard item={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
