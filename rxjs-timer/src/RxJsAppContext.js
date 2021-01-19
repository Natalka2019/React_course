import React, {useEffect, useState} from 'react';
import {Observable, fromEvent } from 'rxjs';

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


  useEffect( () => {

    const startStop = document.querySelector('#startStop');
    const reset = document.querySelector('#reset');
    const wait = document.querySelector('#wait');

    const startStopTimerHandler = fromEvent(startStop, 'click');
    const resetHandler = fromEvent(reset, 'click');
    const waitHandler = fromEvent(wait, 'click');

    startStopTimerHandler.subscribe( (e) => {
      
      e.preventDefault();

      if (isActive) {
        
        setIsActive(false);
        clearTime();

      } else {

        setIsActive(true);

      }

    });


    resetHandler.subscribe( (e) => {
      
      e.preventDefault();
      clearTime();

    });


    waitHandler.subscribe( (e) => {
      
      e.preventDefault();
  
      let lastClick = currentTime;
      let newDate = new Date();
      let newTime = newDate.getTime();
  
      if (newTime - lastClick < 300) {
  
        setIsActive(false);
  
      }
  
      setCurrentTime(newTime);

    });

  }, [isActive, currentTime]);

  useEffect( () => {

    let intervalID;

      if (isActive) {

        const observable = new Observable( () => {

          intervalID = setInterval( () => {

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


  const clearTime = () => {

    setTime({
      seconds: '00',
      minutes: '00',
      hours: '00',
    });

    setCounter(0);

  };
  

  return (
    <RxJsTimerContext.Provider value = { {
      time
    }}>
      {props.children}
    </RxJsTimerContext.Provider>
  )
};

export {RxJsTimerContext, RxJsTimerProvider};