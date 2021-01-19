import React, {useEffect, useState} from 'react';
import {Observable} from 'rxjs';

const RxJsTimerContext = React.createContext();

const RxJsTimerProvider = (props) => {

  const [currentTime, setCurrentTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState({
    seconds: '00',
    minutes: '00',
    hours: '00',
  });

  const startStopTimerHandler = (e) => {

    e.preventDefault();

    if (isActive) {
      setIsActive(false);
      setTime({
        seconds: '00',
        minutes: '00',
        hours: '00',
      });

      setCounter(0);
    } else {
      setIsActive(true)
    }
  };


  const resetHandler = (e) => {

    e.preventDefault();

      setTime({
        seconds: '00',
        minutes: '00',
        hours: '00',
      });

      setCounter(0);

  };


  const waitHandler = (e) => {

    e.preventDefault();

    let lastClick = currentTime;
    let newDate = new Date();
    let newTime = newDate.getTime();

    if (newTime - lastClick < 300) {

      setIsActive(false);

    }

    setCurrentTime(newTime);

  }


  useEffect( () => {

    let intervalID;

      if (isActive) {

        const observable = new Observable( () => {

          intervalID = setTimeout( () => {

            const secondCounter = counter % 60;
            const minuteCounter = Math.floor(counter / 60);
            const hourCounter = Math.floor(counter / 60 / 60);
  
            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: `${secondCounter}`;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: `${minuteCounter}`;
            const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}`: `${hourCounter}`;
  
            setTime({
              seconds: computedSecond,
              minutes: computedMinute,
              hours: computedHour,
            });
  
            setCounter(counter => counter +1);
  
          }, 1000);
  
        });
  
        observable.subscribe();
      }
      return () => clearInterval(intervalID);

  }, [isActive, counter]);


  return (
    <RxJsTimerContext.Provider value = { {
      time,
      startStopTimerHandler,
      resetHandler,
      waitHandler,
    }}>
      {props.children}
    </RxJsTimerContext.Provider>
  )
};

export {RxJsTimerContext, RxJsTimerProvider};
