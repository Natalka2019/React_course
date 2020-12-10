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
      "checkIn": "2020-12-10",
      "checkOut": "2020-12-25",
      "pageSize": "25",
      "adults1": "1",
      "currency": "USD",
      "locale": "en_US",
      "sortOrder": "PRICE"
    })}`, {
      method: 'GET',
      headers: {
        "x-rapidapi-key": "ef6aa709c6msh59ea8aef79713cbp1df7c5jsn167c2866f9b9",
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