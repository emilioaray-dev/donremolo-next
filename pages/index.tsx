import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Slogan from '../components/slogan'
import Link from 'next/link'
import Image from "next/image";


export async function getStaticProps() {
  // Res Lista Pizza
  const resCategorias = await fetch("http://127.0.0.1:3000/api/dataCategorias");
  const listacategoria = await resCategorias.json();
 console.log(listacategoria);

  return {
    props: {
      listacategoria,
    },
    revalidate: 10, // In seconds
  };
}
function Home({ listacategoria }) {
  return (
    <div className={styles.backgroundHome}>
      <Head>
        <title>Don Rémolo</title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="container">
          <div className="containerCardCategories">
            {listacategoria.map((listacategoria) => {
              return (
                <div key={listacategoria.id}>
                  <Link
                    as={`/${listacategoria.categoria}`}
                    href="/[productos]"
                  >
                    <a>
                      <div className="cardCategories">
                        <div className="effectTranslateY">
                          <div className="imgGrid">
                            <picture className="imgCategories">
                              <Image
                                src={`${listacategoria.urlImagen}`}
                                alt="Imagen de Empanadas"
                                width={512}
                                height={384}
                                layout="responsive"
                                priority
                              />
                            </picture>
                          </div>
                          <h2 className="titleCategories">
                            {listacategoria.categoria}
                          </h2>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
        <style jsx>{`
          .container {
            display: grid;
            height: 62vh;
            align-content: center;
          }

          .containerCardCategories {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: center;
          }

          .cardCategories {
            min-width: 8rem;
            max-width: 20rem;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
            border-radius: 0.625rem;
            margin: 2rem 1rem 1rem 1rem;
            background-color: var(--Cards-Colors);
            height: fit-content;
          }

          .effectTranslateY {
            display: grid;
            transform: translateY(-30%);
            justify-items: center;
          }

          .imgGrid {
            display: grid;
            min-height: 6rem;
            padding: 0rem 0.5rem;
            width: 100%;
          }

          .titleCategories {
            font-family: var(--Home-Card-fontFamily);
            font-size: 0.875rem;
          }
        `}</style>
      </main>

      <footer>
        <Slogan />
      </footer>
    </div>
  );
}


export default Home
