import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

import {SearchTemplate} from '../src/templates';
import {SearchResultsProvider} from '../AppContext';

export default function Home() {
  
  return (
    <SearchResultsProvider>
      <div className={styles.container}>
        <Head>
          <title>Atomic airbnb</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <SearchTemplate/>
        </main>
        <footer className={styles.footer}>
        </footer>
      </div>
    </SearchResultsProvider>
  )
}
