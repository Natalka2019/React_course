import React, {useState} from 'react';

const AppContext = React.createContext();

const AppContextProvider = (props) => {

  const [tableDataHead, setTableDataHead] = useState();
  const [tableDataBody, setTableDataBody] = useState();
  const [fullData, setFullData] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const handleOnDrop = (data) => {

    const tempData = data[0].data.slice(0);

    tempData.unshift('ID');
    tempData.push('Duplicate with');

    const rawData = [...data];
    const bodyData = rawData.map(item => item.data);
    
    bodyData.splice(0,1);
    bodyData.map( (item, index) => item.unshift(index+1) && item.push());

    let phones = bodyData.map(item => item[2]);
    let emails = bodyData.map(item => item[3].toLowerCase());

    findDuplicates(phones);
    findDuplicates(emails);

    setTableDataHead(tempData);
    setTableDataBody(bodyData);
    setShowTable(true);


    function findDuplicates (array) {

      for (let i=0; i<array.length; i++) {

        let firstIndex = array.indexOf(array[i]);

        if (i !== firstIndex ) {

            bodyData[i][11] =  bodyData[firstIndex][0];
  
        } else if (!bodyData[i][11]) {

          bodyData[i][11] = '';

        }
      }

    }

    bodyData.map( (item) => {

      if (!item[1] || !item[2] || !item[3]) {
        setFullData(false);
        setShowTable(false);
      }

    });

  };


  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  };


  const handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data);
    setShowTable(false);
    setFullData(true);
    console.log('---------------------------')
  };

  
  return (
    <AppContext.Provider value = {{
      handleOnDrop,
      handleOnError,
      handleOnRemoveFile,
      tableDataHead,
      tableDataBody,
      fullData,
      showTable
    }}>
      {props.children}
    </AppContext.Provider>
  )

};

export {AppContext, AppContextProvider};



// IN CASE WE NEED TO CONVERT ROWS TO OBJECTS FOR IMPORT TO DATABASE


// createObjects(tempData, bodyData);

// function createObjects (head, body) {

//   console.log(head);

//   let databaseData = [];

//   function Lawyer (
//     id,
//     fullName,
//     phone,
//     email,
//     age, 
//     experience, 
//     yearlyIncome,
//     hasChildren,
//     licenseState,
//     expirationDate,
//     licenseNumber,
//     duplicateWith) {

//     this.id = id;
//     this.fullName = fullName;
//     this.phone = phone;
//     this.email = email;
//     this.age = age;
//     this.experience = experience;
//     this.yearlyIncome = yearlyIncome;
//     this.hasChildren = hasChildren;
//     this.licenseState = licenseState;
//     this.expirationDate = expirationDate;
//     this.licenseNumber = licenseNumber;
//     this.duplicateWith = duplicateWith

//   };

//   for (let i = 0; i < body.length; i++) {

//     let lawyer = new Lawyer(
//       body[i][0], 
//       body[i][1],
//       body[i][2], 
//       body[i][3],
//       body[i][4], 
//       body[i][5],
//       body[i][6], 
//       body[i][7],
//       body[i][8], 
//       body[i][9],
//       body[i][10], 
//       body[i][11],
//       );

//     databaseData.push(lawyer);

//   };

//   console.log(databaseData);
  
//   return databaseData;
// }