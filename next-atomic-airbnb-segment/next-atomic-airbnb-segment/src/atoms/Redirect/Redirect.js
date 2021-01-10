import React from 'react';

import styles from './Redirect.module.css';

const Redirect = ({children}) => <a href = "#" className = {styles.link}>{children}</a>;

export default Redirect;