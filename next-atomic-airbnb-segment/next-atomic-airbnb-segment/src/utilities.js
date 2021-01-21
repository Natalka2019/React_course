const splitWords = (string) => {

  let splitString = '';

  for (let char of string) {

    if (char !== char.toUpperCase()) {
      
      splitString += char; 

    } else {
      
      splitString += ` ${char.toLowerCase()}`; 

     }
  }

  return splitString;
  
};

export default splitWords;