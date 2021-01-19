import React, {useContext} from 'react';

import {RxJsTimerContext} from './RxJsAppContext';
import './Styles.css';

function RxJsTimerContainer() {

  const {time, startStopTimerHandler, resetHandler, waitHandler} = useContext(RxJsTimerContext);
  const {hours, minutes, seconds} = time;

  return (
    <div className="TimerContainer">
      <button className = 'button' onClick = {e => startStopTimerHandler(e)}>Start/Stop</button>
      <button className = 'button' onClick = {e => waitHandler(e)}>Wait</button>
      <button className = 'button' onClick = {e => resetHandler(e)}>Reset</button>
      <h1><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></h1>
    </div>
  );
}

export default RxJsTimerContainer;