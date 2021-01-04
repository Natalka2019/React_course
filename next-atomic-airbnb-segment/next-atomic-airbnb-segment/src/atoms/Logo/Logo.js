import React from 'react';

import styles from './Logo.module.css';

const Logo = ({children}) => <a href = './' className = {styles.logo}>{children}</a>;

export default Logo;