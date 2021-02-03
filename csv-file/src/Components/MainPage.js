import React, { useContext } from 'react';
import '../App.css';

import {AppContext} from '../AppContext';

import ImportButton from './ImportButton';
import Table from './Table';

function MainPage() {

  const {fullData, tableDataHead, tableDataBody, showTable} = useContext(AppContext);

  return (
      <div className="MainPage">
        <ImportButton />
        {showTable &&
         <Table tableDataHead = {tableDataHead} tableDataBody = {tableDataBody}/>
        }
        {!fullData &&
         <div className = 'errorMessage'>File format is not correct</div>
        }
      </div>

  );
}

export default MainPage;
