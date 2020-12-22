import React, {useState, useEffect} from 'react';

const SearchResultsContext = React.createContext();

const SearchResultsProvider = (props) => {

  const [destination, setDestination] = useState(''); 
  const [propertiesList, setPropertiesList] = useState([]);
  const [showLoading, setShowLoading] = useState(true);  

  const checkIn = "2020-01-08";
  const checkOut = "2020-01-15";
  const adult = "1";
 
  const checkInDate = new Date("2020-01-08");
  const checkOutDate = new Date("2020-01-15");

  const checkInShort = checkInDate.toLocaleString('default', {month: 'short', day: 'numeric'})
  const checkOutShort = checkOutDate.toLocaleString('default', {month: 'short', day: 'numeric'})

  useEffect( () => {

    fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
      "destinationId": "1506246",
      "pageNumber": "1",
      "checkIn": checkIn,
      "checkOut": checkOut,
      "pageSize": "25",
      "adults1": adult,
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
        setDestination(json.data.body.header.split(',')[0]);
        setPropertiesList(json.data.body.searchResults.results);
        setShowLoading(false);
      })
      .catch((error) => console.log(error))
  }, []);

  return (
    <SearchResultsContext.Provider value = { {
      checkInShort,
      checkOutShort,
      adult,
      destination,
      propertiesList,
      showLoading
    }}>
      {props.children}
    </SearchResultsContext.Provider> 
  )
};

export {SearchResultsContext, SearchResultsProvider};