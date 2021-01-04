import React, {useState, useEffect} from 'react';

const SearchResultsContext = React.createContext();

const SearchResultsProvider = (props) => {

  const [searchRequest, setSearchRequest] = useState ({
    
    destination: '',
    checkIn: '',
    checkOut: '',
    adult: ''

  });

  const [destination, setDestination] = useState('');
  const [destinationId, setDestinationId] = useState('');  
  const [propertiesList, setPropertiesList] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);   

  const inputValueHandler = (e) => {

    e.preventDefault();

    setSearchRequest({...searchRequest, [e.target.name]: e.target.value});

  };

  const destinationIdRequest = async (destination) => {

    await fetch(`https://hotels4.p.rapidapi.com/locations/search?${new URLSearchParams({
      "query": destination,
      "locale": "en_US"
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
        console.log(json.suggestions[0].entities[0].destinationId);
        setDestinationId(json.suggestions[0].entities[0].destinationId);
        console.log(destinationId);     
      })
      .catch((error) => console.log(error));

  }

  const getListOfProperties = async () => {

    await fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
      "destinationId": "1506246",
      "pageNumber": "1",
      "checkIn": searchRequest.checkIn,
      "checkOut": searchRequest.checkOut,
      "pageSize": "25",
      "adults1": searchRequest.adult,
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

        console.log(destinationId);
        console.log(showLoading);
        console.log(destination);
        console.log(searchRequest);
        console.log(propertiesList);

        console.log(json);
        setDestination(json.data.body.header.split(',')[0]);
        setPropertiesList(json.data.body.searchResults.results);
        setShowLoading(false);

        console.log(destinationId);
        console.log(showLoading);
        console.log(destination);
        console.log(searchRequest);
        console.log(propertiesList);

      })
      .catch((error) => console.log(error))
  }
  
   const searchHandler = async (e) => {

    e.preventDefault();

    console.log(searchRequest);

    await destinationIdRequest(searchRequest.destination);

    // await getListOfProperties();

  }; 

  useEffect( () => {
    getListOfProperties();
  }, [destinationId]);
 
  const checkInDate = new Date("2020-01-08");
  const checkOutDate = new Date("2020-01-15");

  const checkInShort = checkInDate.toLocaleString('default', {month: 'short', day: 'numeric'})
  const checkOutShort = checkOutDate.toLocaleString('default', {month: 'short', day: 'numeric'})

  const adult = searchRequest.adult;

  // useEffect( () => {

  //   fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
  //     "destinationId": "1506246",
  //     "pageNumber": "1",
  //     "checkIn": checkIn,
  //     "checkOut": checkOut,
  //     "pageSize": "25",
  //     "adults1": adult,
  //     "currency": "USD",
  //     "locale": "en_US",
  //     "sortOrder": "PRICE"
  //   })}`, {
  //     method: 'GET',
  //     headers: {
  //       "x-rapidapi-key": "2cfaa32eb3msh350d9bcfdaba73bp17210cjsn5488defdc617",
  //       "x-rapidapi-host": "hotels4.p.rapidapi.com",
  //       "useQueryString": true
  //     }
  //   })

  //     .then(data => data.json())
  //     .then(json => {
  //       setDestination(json.data.body.header.split(',')[0]);
  //       setPropertiesList(json.data.body.searchResults.results);
  //       setShowLoading(false);
  //     })
  //     .catch((error) => console.log(error))
  // }, []);

  const modalHandler = (e) => {

    e.preventDefault();

    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
    
  };

  return (
    <SearchResultsContext.Provider value = { {
      checkInShort,
      checkOutShort,
      adult,
      destination,
      propertiesList,
      showLoading,
      modalHandler,
      showModal,
      searchHandler,
      inputValueHandler
    }}>
      {props.children}
    </SearchResultsContext.Provider> 
  )
};

export {SearchResultsContext, SearchResultsProvider};