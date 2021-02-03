import React from 'react';

import '../App.css';

import Utilities from '../Utilities';

const Table = (props) => {

  const {tableDataHead, tableDataBody} = props;

  const className = (value, index, array) => {

    let color = 'cell';
    let realisticExperience = array[4] - 21;

    switch (index) {

      case 2: 
        return Utilities.validatePhone(value);

      case 3: 
        return Utilities.validateEmail(value);

      case 4: 
        return Utilities.validateAge(value);

      case 5: 
        return Utilities.validateExperience(value, realisticExperience);

      case 6: 
        return Utilities.validateIncome(value);

      case 7: 
        return Utilities.validateChildren(value);

      case 8: 
        return Utilities.validateState(value);

      case 9: 
        return Utilities.validateExpirationDate(value); 

      case 10: 
        return Utilities.validateLicense(value); 
        
      default:
        return color;
    }

  }

  return (

    <table className = 'table'>
  
      {tableDataHead &&
        <thead>
          <tr>
            {tableDataHead.map( (title, index) => (
              <th key = {`key- ${ Symbol(index).toString() }`}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
      }

      {tableDataBody &&
        <tbody>
          {tableDataBody.map( (title, index) => (
              <tr key = {`key- ${ Symbol(index).toString() }`}>
                {title.map( (item, index, array) => (
                  <td className = {className(item, index, array)} key = {`key- ${ Symbol(index).toString() }`}>
                    {item}
                  </td>
                ))}
              </tr>
          ))}
        </tbody>
      }
        
    </table>
  )
};

export default Table;