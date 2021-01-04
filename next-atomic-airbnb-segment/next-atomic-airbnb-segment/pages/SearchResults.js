import React from 'react';

import {SearchResultsTemplate} from '../src/templates';
import {SearchResultsProvider} from '../AppContext';

const SearchResults = () => {

  return (

    <SearchResultsProvider>
      <SearchResultsTemplate/>
    </SearchResultsProvider>
  )

};

export default SearchResults;