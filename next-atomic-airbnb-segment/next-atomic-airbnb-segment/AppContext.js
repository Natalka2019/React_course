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
  const [markerHover, setMarkerHover] = useState('');
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
        //"x-rapidapi-key": "2cfaa32eb3msh350d9bcfdaba73bp17210cjsn5488defdc617", - to use after Jan 2021
        "x-rapidapi-key": "ef6aa709c6msh59ea8aef79713cbp1df7c5jsn167c2866f9b9",
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

      setPropertySelected(e.currentTarget.id);

  }

  const cardDeselectedHandler = (e) => {

    e.preventDefault();

    setPropertySelected('');

  };

  const markerHoverHandler = (e) => {

    try {

      if(e.currentTarget.title) {
  
        const id = e.currentTarget.title;
  
        e.preventDefault();
  
        setMarkerHover(id);

      }

    } catch(error) {

      console.log(error);

    }
 

    // console.log(title);

    // console.log(e);
    // //console.log(e.relatedTarget);
    // console.log(e.currentTarget);
    // console.log(e.target);
    // console.log(e.target.title);
    // //console.log(e.currentTarget.title);

    // console.dir(e);
    // console.dir(e.currentTarget);

    // //setMarkerHover(e.currentTarget.id);

    // setMarkerHover(title);

  }

  const markerSelectedHandler = (e) => {

    try {

      if(e.currentTarget.title) {
  
        const id = e.currentTarget.title;
  
        e.preventDefault();
  
        setInfoWindowId(id);
  
        setShowInfo(!showInfoWindow);
  
      }

    } catch(error) {

      console.log(error);

    }
 
  }

  console.log(markerHover);


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
      cardDeselectedHandler,
      propertySelected,
      markerSelectedHandler,
      showInfoWindow,
      infoWindowID,
      markerHoverHandler,
      markerHover
    }}>
      {props.children}
    </SearchResultsContext.Provider> 
  )
};

export {SearchResultsContext, SearchResultsProvider};