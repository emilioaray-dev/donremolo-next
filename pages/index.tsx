import Head from "next/head";
import Header from "../components/header";
import Slogan from "../components/slogan";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import slugify from "slugify";
import ShoppingCart from "../components/cards/shoppingCart";

export const getStaticProps: GetStaticProps = async (context) => {
  type ListCategory = {
    id: number;
    categoria: string;
    urlImagen: string;
  };

  // Res Lista Categoria (`http://${url}/api/dataCategorias`);
  const resCategorias = await fetch(
    `https://donremolo-next.vercel.app/api/dataCategorias`
  );
  // Lista Categoria to Json
  const ListCategory = await resCategorias.json();
  // Lista All Product to Json
  const res = await fetch(`https://donremolo-next.vercel.app/api/dataAll`);
  const lista = await res.json();

  const ok = ListCategory.map((l: any) =>
    slugify(l.categoria, { lower: true })
  );
  // console.log (ok)

  return {
    props: {
      ListCategory,
    },
    revalidate: 10, // In 10 seconds
  };
};
function Home({
  ListCategory,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Don Rémolo</title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="preload"
          as="font"
          href="/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        hideBackbuttom={"hide"} //'hide' Oculta el bottom de back
        hideTitle={""} // 'hide' Oculta el titulo o --title--
        title={"Nuestro Menú"} // Texto a mostrar
        hideIconNav={"none"} //'none' Oculta Los Botonos del Nav
        color={""}
      />

      <main>
        <section className="containerCardCategories">
          <div className="cardCategories__grid">
            {ListCategory.map(
              (listC: { id: string; categoria: string; urlImagen: string }) => {
                return (
                  <div key={listC.id}>
                    <Link
                      href={`/${slugify(listC.categoria, { lower: true })}`}
                    >
                      <a>
                        <div className="cardCategories">
                          <div className="cardCategories--effectTranslateY">
                            <picture className="cardCategories__imgGrid">
                              <Image
                                src={`${listC.urlImagen}`}
                                alt={`Imagen de ${listC.categoria}`}
                                width={512}
                                height={384}
                                layout="responsive"
                                priority
                              />
                            </picture>
                            <h2 className="titleCategories">
                              {listC.categoria}
                            </h2>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
        </section>
      </main>

      <footer>
        <Slogan />
      </footer>

      {/* Style of Component-----------------------------------*/}
      <style jsx>{`
        @media only screen and (min-width: 768px) {
          .cardCategories__grid {
            grid-template-columns: auto auto auto auto !important;
          }
        }
        @media (max-width: 768px) and (orientation: landscape) {
          .cardCategories__grid {
            grid-template-columns: auto auto auto auto !important;
          }
        }
        .cardCategories__grid {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: center;
        }
        .containerCardCategories {
          position: absolute;
          width: 100vw;
          top: 50%;
          transform: translateY(-38%);
        }

        .cardCategories {
          min-width: 8rem;
          max-width: 20rem;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 0.625rem;
          margin: 2rem 1rem 1rem 1rem;
          background-color: var(--brandColorWhite);
          height: 7.2rem;
        }

        .cardCategories--effectTranslateY {
          display: grid;
          transform: translateY(-30%);
          justify-items: center;
        }

        .cardCategories__imgGrid {
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
    </>
  );
}

export default Home;
