import React, { FocusEvent } from 'react';
import { FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.scss';

type SearchProps = {
  searchHandler: Function;
  searchValue: string;
};

const Search: React.FC<SearchProps> = ({ searchHandler, searchValue }: SearchProps) => {
  const handleFocus = (e: FocusEvent<any>) => e.target.select();

  return (
    <FormControl
      className="search"
      onChange={(e) => searchHandler(e.target.value)}
      onFocus={handleFocus}
      placeholder="Enter Country Name"
      value={searchValue}
    />
  );
};

export default Search;
