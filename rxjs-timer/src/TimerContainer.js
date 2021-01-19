import React, {useContext} from 'react';

import {TimerContext} from './AppContext';

function TimerContainer() {

  const {time, startStopTimerHandler, resetHandler, waitHandler} = useContext(TimerContext);
  const {hours, minutes, seconds} = time;

  console.log(time);

  return (
    <div className="TimerContainer">
      <button onClick = {e => startStopTimerHandler(e)}>Start/Stop</button>
      <button onClick = {e => waitHandler(e)}>Wait</button>
      <button onClick = {e => resetHandler(e)}>Reset</button>
      <h1><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></h1>
    </div>
  );
}

export default TimerContainer;