import './App.css';

import {AppContextProvider} from './AppContext';

import MainPage from './Components/MainPage';

function App() {

  return (
    <AppContextProvider>
      <div className="App">
        <MainPage />
      </div>
    </AppContextProvider>

  );
}

export default App;
