import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './components/header'
import CardHome from './components/cardHome'
import Slogan from './components/slogan'


const Home: NextPage = () => {
  return (
    <div className={styles.backgroundHome}>
      <Head>
        <title>Don Rémolo</title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main >

        <CardHome/>

      </main>

      <footer >
<Slogan />
      </footer>
    </div>
  )
}

export default Home
