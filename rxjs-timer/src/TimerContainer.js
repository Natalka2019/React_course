import React, {useContext} from 'react';

import {TimerContext} from './AppContext';
import './Styles.css';

function TimerContainer() {

  const {time, startStopTimerHandler, resetHandler, waitHandler} = useContext(TimerContext);
  const {hours, minutes, seconds} = time;

  console.log(time);

  return (
    <div className="TimerContainer">
      <button className = 'button green' onClick = {e => startStopTimerHandler(e)}>Start/Stop</button>
      <button className = 'button green' onClick = {e => waitHandler(e)}>Wait</button>
      <button className = 'button green' onClick = {e => resetHandler(e)}>Reset</button>
      <h1><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></h1>
    </div>
  );
}

export default TimerContainer;