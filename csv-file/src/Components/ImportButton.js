import React, { useContext } from 'react';
import { CSVReader } from 'react-papaparse';

import '../App.css';

import { AppContext } from '../AppContext';

const ImportButton = () => {

const {handleOnDrop, handleOnError, handleOnRemoveFile} = useContext(AppContext);

    return (
      <div className = 'importButton'>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          noDrag
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
        >
          <span>Import users.</span>
        </CSVReader>
      </div>

    )
};

export default ImportButton;