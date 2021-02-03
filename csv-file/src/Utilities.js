let color = 'cell';

const validatePhone = (value) => {
  
  let phone = /^\+1\d{10}\b/;
  
  if (!phone.test(value)) {
    return color = 'cell-error';
  } else {
    return color = 'cell';
  }; 
  
};

const validateEmail = (value) => {
  
  let email = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

  if (!email.test(value)) {
    return color = 'cell-error';
  } else {
    return color = 'cell';
  };
  
};

const validateAge = (value) => {
  
  let age = /\b\d{1,2}\b/;

  if (!age.test(value) || value == 0 || value < 21) {
    return color = 'cell-error';
  } else {
    return color = 'cell';
  };
  
};

const validateExperience = (value, exp) => {
  
  let experience = /\b\d{1,2}\b/;

  if (!experience.test(value) || value < 0 || (value > exp) ) {
    return color = 'cell-error';
  } else {
    return color = 'cell';
  };
  
};

const validateIncome = (value) => {
  
  let income = /^\d+\.\d{2}$/;

  if (!income.test(value) || value > 1000000 ) {
    return color = 'cell-error';
  } else {
    return color = 'cell';
  };
  
};

const validateChildren = (value) => {
  
  if (value !== 'TRUE' && value !== 'FALSE' && value) {
    return color = 'cell-error';
  } else {
    return color = 'cell';
  }

};

const validateState = (value) => {
  
  let state = /\b[A-Za-z]{2,}(?![.\*\$])\b/;
  if (!state.test(value)) {
    return color = 'cell-error';
  } else {
    return color = 'cell';
  };
  
};

const validateExpirationDate = (value) => {
  
  let today = new Date();
  let expDate = new Date(value);
  let regexp1 = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}(?![.])/;
  let regexp2 = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))(?![.])/gm;

  if (today > expDate || !regexp1.test(value) && !regexp2.test(value)) {
    return color = 'cell-error';
  } else {
    return color = 'cell';
  }; 
  
};

const validateLicense = (value) => {

  let license = /\b[A-Za-z0-9]{6}(?![.])\b/;

  if (!license.test(value)) {
    return color = 'cell-error';
  } else {
    return color = 'cell';
  }; 
  
};

export default {
  validatePhone,
  validateEmail,
  validateAge,
  validateExperience,
  validateIncome,
  validateChildren,
  validateState,
  validateExpirationDate,
  validateLicense
};
