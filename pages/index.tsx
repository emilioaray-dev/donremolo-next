import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import CardHome from '../components/cardHome'
import Slogan from '../components/slogan'
import { useEffect, useState } from 'react'



export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/dataPizza");
  const lista = await res.json();

  console.log(lista);

  return {
    props: {
      lista,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

// export async function getStaticPaths() {
  
  
//}




const Home: NextPage = () => {
  return (
    <div className={styles.backgroundHome}>
      <Head>
        <title>Don Rémolo</title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main >
        <CardHome />
      </main>

      <footer >
        <Slogan />
      </footer>
    </div>
  )
}

export default Home
