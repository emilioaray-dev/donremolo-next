import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Slogan from '../components/slogan'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";


export async function getStaticProps() {
  // Res Lista Categoria
  const resCategorias = await fetch("http://127.0.0.1:3000/api/dataCategorias");
  // Lista Categoria to Json
  const listCategory = await resCategorias.json();
  /*
  // Map Lista Categoria to Minuscula
  listCategory.map((pathCategory) => {
    const pathLower = pathCategory.categoria.toLowerCase();
    console.log(pathLower);
  });
*/

  return {
    props: {
      listCategory,
    },
    revalidate: 10, // In 10 seconds
  };
}
function Home({ listCategory }) {
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
        <section className="container">
          <div className="containerCardCategories">
            {listCategory.map((listC) => {
              return (
                <div key={listC.id}>
                  <Link href={`/${listC.categoria}`}>
                    <a>
                      <div className="cardCategories">
                        <div className="effectTranslateY">
                          <div className="imgGrid">
                            <picture className="imgCategories">
                              <Image
                                src={`${listC.urlImagen}`}
                                alt="Imagen de Empanadas"
                                width={512}
                                height={384}
                                layout="responsive"
                                priority
                              />
                            </picture>
                          </div>
                          <h2 className="titleCategories">{listC.categoria}</h2>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer>
        <Slogan />
      </footer>

      {/* Style of Component-----------------------------------*/}
      <style jsx>{`
        @media only screen and (min-width: 768px) {
          .containerCardCategories {
            grid-template-columns: auto auto auto auto !important;
          }
        }
        .container {
          position: absolute;
          width: 100vw;
          top: 50%;
          transform: translateY(-48%);
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
    </div>
  );
}


export default Home
