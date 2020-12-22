import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

import SearchPage from '../src/templates/SearchPage/SearchPage';

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Atomic airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchPage/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
