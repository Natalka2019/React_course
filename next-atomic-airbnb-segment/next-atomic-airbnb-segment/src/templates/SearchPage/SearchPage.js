import React from 'react';
import Link from 'next/link';

import styles from './SearchPage.module.css';

const SearchPage = () => {
  
  return (

    <div>
      <header className = {styles.header}>
        <h1 className={styles.title}>Welcome to airbnb!</h1>
      </header>
      <main className = {styles.main}>
        <div className = {styles.link}>
          <Link to href = '/SearchResults'>Search results</Link>
        </div>
      </main>
    </div>

  )

};

export default React.memo(SearchPage);