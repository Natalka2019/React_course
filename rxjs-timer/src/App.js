import React from 'react';
import './App.css';

import {TimerProvider} from './AppContext';
import TimerContainer from './TimerContainer';

import {RxJsTimerProvider} from './RxJsAppContext';
import RxJsTimerContainer from './RxJsTimerContainer';

function App() {

  return (

    <div className="App">
      <h1>React</h1>
      <TimerProvider>
        <TimerContainer/>
      </TimerProvider>
      <br/>
      <h1>RxJs</h1>
      <RxJsTimerProvider>
        <RxJsTimerContainer/>
      </RxJsTimerProvider>
    </div>
    

  );
}

export default App;
