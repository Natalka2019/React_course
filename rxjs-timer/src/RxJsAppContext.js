import React, {useEffect, useState} from 'react';
import {fromEvent, timer} from 'rxjs';
import {buffer, filter, throttleTime} from 'rxjs/operators';

const RxJsTimerContext = React.createContext();

const RxJsTimerProvider = (props) => {

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
    const clicks$ = fromEvent(wait, 'click');

    const subscriptionStartStop = startStopTimerHandler.subscribe( (e) => {
      
      e.preventDefault();

      if (isActive) {
        
        setIsActive(false);
        clearTime();

      } else {

        setIsActive(true);

      }

    });


    const subscriptionReset = resetHandler.subscribe( (e) => {
      
      e.preventDefault();
      clearTime();

    });


    const subscriptionWait = clicks$.subscribe( (e) => {
      
      e.preventDefault();
        
      clicks$.pipe(
        buffer(clicks$.pipe(throttleTime(300))),
        filter(clickArray => clickArray.length > 1)
      )
        .subscribe(() => setIsActive(false));
      
    });


    return () => {

      subscriptionStartStop.unsubscribe();
      subscriptionReset.unsubscribe();
      subscriptionWait.unsubscribe();
    };  

  }, [isActive]);

  useEffect( () => {

    if (isActive) {

      const source = timer(1000);

      const tick = source.subscribe( () => {

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

      });

      return () => tick.unsubscribe();

    }

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