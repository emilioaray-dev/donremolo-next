import Header from "../components/header";
import styles from "../../styles/Home.module.css";
import CardList from "../components/cardList";
import Head from "next/head";
import CardDescription from "../components/cardDescription";
import Pizzas from './../pizzas/index';

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
      <CardDescription />
    </div>
  );
}

export default Pizzas;
