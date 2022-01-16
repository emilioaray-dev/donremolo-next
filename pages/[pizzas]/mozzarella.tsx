import Header from "../components/header";
import styles from "../../styles/Home.module.css";
import CardList from "../components/cardList";
import Head from "next/head";
import CardDescription2 from "../components/cardDescription2";

function Pizzas() {
  return (
    <div className={styles.backgroundHome}>
      <Head>
        <title>Don Rémolo | Pizza Mozzarella</title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{``}</style>
      <Header />
      <CardDescription2 />
    </div>
  );
}

export default Pizzas;
