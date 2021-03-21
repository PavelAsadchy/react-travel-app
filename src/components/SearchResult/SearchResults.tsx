import { Link } from 'react-router-dom';

import { Country } from '../../models/CountryList.model';
import CountryCard from '../CountryCard/CountryCard';

import './SearchResults.scss';

type SearchResultsProps = {
  searchResult: Country[];
};

export const SearchResults = ({ searchResult }: SearchResultsProps) => {
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
