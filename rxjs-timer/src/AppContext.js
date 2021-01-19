import React, {useEffect, useState} from 'react';

const TimerContext = React.createContext();

const TimerProvider = (props) => {

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
      clearTime();

    } else {

      setIsActive(true)

    }
  };


  const resetHandler = (e) => {

    e.preventDefault();
    clearTime();

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
    <TimerContext.Provider value = { {
      time,
      startStopTimerHandler,
      resetHandler,
      waitHandler
    }}>
      {props.children}
    </TimerContext.Provider>
  )
};

export {TimerContext, TimerProvider};
