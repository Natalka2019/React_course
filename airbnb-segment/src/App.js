import React from 'react';

import {SearchResultsProvider} from './AppContext';
import SearchResults from './Components/SearchResults/SearchResults';

const App = () =>{
  return (
    <SearchResultsProvider>
      <div className="App">
        <SearchResults />
      </div>
    </SearchResultsProvider>

  );
}

export default App;
