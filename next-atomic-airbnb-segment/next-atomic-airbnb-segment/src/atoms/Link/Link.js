import React from 'react';

import styles from './Link.module.css';

const Link = ({children}) => <a href = "#" className = {styles.link}>{children}</a>;

export default Link;