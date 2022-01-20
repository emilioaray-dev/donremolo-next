import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header";
import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {

  const res = await fetch("http://127.0.0.1:3000/api/dataCategorias");
  const posts = await res.json();


  const paths = posts.map((listaPizza) => ({
    params: { productos: listaPizza.categoria },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Res Lista Categorias
  const resCategorias = await fetch("http://127.0.0.1:3000/api/dataCategorias");
  const listaCategoria = await resCategorias.json();
  // console.log(listaCategoria);

  // Res Lista Pizza
  const resPizza = await fetch("http://127.0.0.1:3000/api/dataPizza");
  const listaPizza = await resPizza.json();
  // console.log(listaPizza);

  return {
    props: {
      listaCategoria,
      listaPizza,
    },
    revalidate: 10, // In seconds
  };
};

function ListaProduct({ listaPizza }) {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Head>
        <title>Don Rémolo | </title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
      </div>
      {listaPizza.map((lproduct) => (
        <div key={lproduct.id}>
          <Link href="#">
            <a>
              <div className="container">
                <article className="containerGrid card">
                  <picture>
                    <Image
                      src={`${lproduct.urlImagen}`}
                      alt={` Pizza ${lproduct.nombre}`}
                      width={100}
                      height={100}
                      layout="responsive"
                      priority
                    />
                  </picture>
                  <div className="rowGrid">
                    <h2>{lproduct.nombre}</h2>
                    <div className="description">{lproduct.descripcion}</div>
                    <footer>{` $${lproduct.precio}`}</footer>
                  </div>
                </article>
              </div>
            </a>
          </Link>

          <style jsx>{`
            .container {
              padding: var(--margen-horizontal);
              max-width: var(--maxWidth-container);
              margin: 0 auto;
            }
            .card{
              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
              border-radius: 0.625rem;
              background-color: var(--Cards-Colors);
              height: fit-content;
              min-height: 112px;
              padding: 12px;
              margin-bottom: 1.2rem;
            }
            .containerGrid {
              display: grid;
              grid-template-columns: max-content auto;
            }
            picture {
              display: grid;
              width:  7rem;
              height: 7rem;
            }
            .rowGrid {
              display: grid;
              grid-template-rows: min-content min-content auto;
              margin-left: 1rem;
              overflow-wrap: break-word;
            }
            h2 {
              font-size: 16px;
              font-weight: 600;
              color: var(--color-Negro);
              margin-bottom: 6px;
            }
            .description {
              display: -webkit-box; /* Caja Limitada */
              -webkit-box-orient: vertical; /* Caja Vertical */
              -webkit-line-clamp: 3; /* Maximo 3 lineas */
              overflow: hidden;
              height: 3.5rem;
              font-size: 12px;
              font-weight: 300;
              color: var(--color-Negro);
              opacity: 0.8;
            }
            footer {
              display: grid;
              display: grid;
              align-items: end;
              justify-items: end;
              margin-right: 1rem;
              color: var(--color-Rojo);
              font-weight: 600;
              opacity: 0.8;
            }
            }
          `}</style>
        </div>
      ))}
      <div style={{ height: "3rem" }}></div>
    </>
  );
}

export default ListaProduct;
