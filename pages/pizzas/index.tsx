import Header from "../../components/header";
import styles from '../../styles/Home.module.css'
import Lista from "../lista2";
import Head from 'next/head'
import CardList2 from "../../components/listado/cardList2";

function Pizzas() {
  return (
    <div className={styles.backgroundHome}>
      <Head>
        <title>Don Rémolo | Pizzas</title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{``}</style>
      <Header />
      <Lista />
      <div style={{ height: "3rem" }} />
    </div>
  );
}

export default Pizzas