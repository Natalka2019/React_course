import React, {useContext} from 'react';

import {RxJsTimerContext} from './RxJsAppContext';
import './Styles.css';

function RxJsTimerContainer() {

  const {time, startStop, wait, reset} = useContext(RxJsTimerContext);
  const {hours, minutes, seconds} = time;

  return (
    <div className="TimerContainer">
      <button className = 'button' ref = {startStop} >Start/Stop</button>
      <button className = 'button' ref = {wait} >Wait</button>
      <button className = 'button' ref = {reset} >Reset</button>
      <h1><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></h1>
    </div>
  );
}

export default RxJsTimerContainer;