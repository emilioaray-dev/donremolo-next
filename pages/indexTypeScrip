import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Slogan from '../components/slogan'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";
import HomeCategory from './homeCategory'



function Home() {
  const router = useRouter();
  return (
    <div className={styles.backgroundHome}>
      <Head>
        <title>Don Rémolo</title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HomeCategory />
      </main>



      <footer>
        <Slogan />
      </footer>

    </div>
  );
}


export default Home
