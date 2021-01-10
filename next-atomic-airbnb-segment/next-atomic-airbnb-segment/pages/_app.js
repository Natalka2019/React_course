import '../styles/globals.css';

import {SearchResultsProvider} from '../AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <SearchResultsProvider>
      <Component {...pageProps} />
    </SearchResultsProvider>
  )
}

export default MyApp
