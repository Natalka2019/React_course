import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

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
  const [idFetched, setIdFetched] = useState(false);
  
  const router = useRouter();
  const href = '/SearchResults';


  const inputValueHandler = (e) => {

    e.preventDefault();

    setSearchRequest({...searchRequest, [e.target.name]: e.target.value});

  };

  const destinationIdRequest = (destination) => {

    fetch(`https://hotels4.p.rapidapi.com/locations/search?${new URLSearchParams({
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
        setDestinationId(json.suggestions[0].entities[0].destinationId);
        setIdFetched(true);
      })
      .catch((error) => console.log(error));

  };

    
  const searchHandler = (e) => {

    e.preventDefault();

    destinationIdRequest(searchRequest.destination);

  }; 

  useEffect( () => {

    if (idFetched) {
      fetchPropertiesList()
    }

  }, [idFetched]);


  const fetchPropertiesList = () => {

    console.log(5);

    fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
      "destinationId": destinationId,
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

          setDestination(json.data.body.header.split(',')[0]);
          setPropertiesList(json.data.body.searchResults.results);
          setShowLoading(false);

          router.push(href);

      })
      .catch((error) => console.log(error))

  }
 
  const checkInDate = new Date("2020-01-08");
  const checkOutDate = new Date("2020-01-15");

  const checkInShort = checkInDate.toLocaleString('default', {month: 'short', day: 'numeric'})
  const checkOutShort = checkOutDate.toLocaleString('default', {month: 'short', day: 'numeric'})

  const adult = searchRequest.adult;

  const modalHandler = (e) => {

    e.preventDefault();

    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
    
  };

  console.log(idFetched);

  console.log(destinationId);
  console.log(showLoading);
  console.log(destination);
  console.log(searchRequest);
  console.log(propertiesList);

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
      inputValueHandler,
    }}>
      {props.children}
    </SearchResultsContext.Provider> 
  )
};

export {SearchResultsContext, SearchResultsProvider};