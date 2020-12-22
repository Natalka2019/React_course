import React from 'react';

import SearchResultsPage from '../src/templates/SearchResultsPage/SearchResultsPage';
import {SearchResultsProvider} from '../AppContext';

const SearchResults = () => {

  return (

    <SearchResultsProvider>
      <SearchResultsPage />
    </SearchResultsProvider>
  )

};

export default SearchResults;