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
  const [showSignIn, setShowSignIn] = useState(false);   
  const [idFetched, setIdFetched] = useState(false);
  const [propertySelected, setPropertySelected] = useState('');
  const [infoWindowID, setInfoWindowId] = useState('');
  const [showInfoWindow, setShowInfo] = useState(false);
  
  const router = useRouter();
  const href = '/SearchResults';


  const inputValueHandler = (e) => {

    e.preventDefault();

    setSearchRequest({...searchRequest, [e.target.name]: e.target.value.trim()});

  };

      
  const searchHandler = (e) => {

    e.preventDefault();

    destinationIdRequest(searchRequest.destination);

    router.push(href);

  }; 


  function  destinationIdRequest (destination) {

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


  useEffect( () => {

    if (idFetched) {
      fetchPropertiesList()
    }

  }, [idFetched]);


  function fetchPropertiesList () {

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

      })
      .catch((error) => console.log(error))

  }


  const modalHandler = (e) => {

    e.preventDefault();

    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
    
  };

  const signInHandler = (e) => {

    e.preventDefault();

    if (showSignIn) {
      setShowSignIn(false);
    } else {
      setShowSignIn(true);
    }
    
  };
   
  const checkInDate = new Date(searchRequest.checkIn);
  const checkOutDate = new Date(searchRequest.checkOut);

  const checkInShort = checkInDate.toLocaleString('default', {month: 'short', day: 'numeric'})
  const checkOutShort = checkOutDate.toLocaleString('default', {month: 'short', day: 'numeric'})

  const adult = searchRequest.adult;

  const cardSelectedHandler = (e) => {

      e.preventDefault();

      console.log(e.currentTarget.id);

      setPropertySelected(e.currentTarget.id);

  }

  const markerSelectedHandler = (e) => {

    if(e.currentTarget.title) {

      console.log(e.currentTarget);
          
      console.log(e.currentTarget.title);

      const id = e.currentTarget.title;
      console.log(id);

      e.preventDefault();

      setInfoWindowId(id);
      setShowInfo(true);

      console.log(infoWindowID);

    }
    
  }

  console.log(idFetched);

  console.log(checkInDate);
  console.log(checkOutDate);
  console.log(checkInShort);
  console.log(checkOutShort);
  console.log(adult);

  console.log(destinationId);
  console.log(showLoading);
  console.log(destination);
  console.log(searchRequest);
  console.log(propertiesList);
  console.log(showInfoWindow);
  console.log(infoWindowID);
  console.log('********');

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
      signInHandler,
      showSignIn,
      searchHandler,
      inputValueHandler,
      cardSelectedHandler,
      propertySelected,
      markerSelectedHandler,
      showInfoWindow,
      infoWindowID
    }}>
      {props.children}
    </SearchResultsContext.Provider> 
  )
};

export {SearchResultsContext, SearchResultsProvider};