import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Slogan from '../components/slogan';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';


const url = process.env.NEXT_PUBLIC_VERCEL_URL;



export const getStaticProps: GetStaticProps = async (context) => {

  type ListCategory = {
    id: number;
    categoria: string;
    urlImagen: string;
  };

  // Res Lista Categoria (`http://${url}/api/dataCategorias`);
  const resCategorias = await fetch(`https://api-donremolo.vercel.app/api/dataCategorias`
  );
  // Lista Categoria to Json
  const ListCategory = await resCategorias.json();
  // Lista All Product to Json
  const res = await fetch(`https://api-donremolo.vercel.app/api/dataAll`);
  const lista = await res.json();
  /*
  // Map Lista Categoria to Minuscula
  ListCategory.map((pathCategory) => {
    const pathLower = pathCategory.categoria.toLowerCase();
    console.log(pathLower);
  });
*/

  return {
    props: {
      ListCategory,
    },
    revalidate: 10, // In 10 seconds
  };
};
function Home({ ListCategory }: InferGetStaticPropsType<typeof getStaticProps>) {
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
            {ListCategory.map((listC: { id: Key | null | undefined; categoria: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; urlImagen: any; }) => {
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


export default Home;
