import React, {useState, useEffect} from 'react';

const SearchResultsContext = React.createContext();

const SearchResultsProvider = (props) => {

  const [destination, setDestination] = useState(''); 
  const [propertiesList, setPropertiesList] = useState([]);
  const [showLoading, setShowLoading] = useState(true);  
  
  useEffect( () => {

    fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
      "destinationId": "1506246",
      "pageNumber": "1",
      "checkIn": "2020-01-08",
      "checkOut": "2020-01-15",
      "pageSize": "25",
      "adults1": "1",
      "currency": "USD",
      "locale": "en_US",
      "sortOrder": "PRICE"
    })}`, {
      method: 'GET',
      headers: {
        "x-rapidapi-key": "2cfaa32eb3msh350d9bcfdaba73bp17210cjsn5488defdc617",
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "useQueryString": true
      }
    })

      .then(data => data.json())
      .then(json => {
        setDestination(json.data.body.header)
        setPropertiesList(json.data.body.searchResults.results)
        setShowLoading(false)
      })
      .catch((error) => console.log(error))
  }, []);

  return (
    <SearchResultsContext.Provider value = { {
      destination,
      propertiesList,
      showLoading
    }}>
      {props.children}
    </SearchResultsContext.Provider> 
  )
};

export {SearchResultsContext, SearchResultsProvider};