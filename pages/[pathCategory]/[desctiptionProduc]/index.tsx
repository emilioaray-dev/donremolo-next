import { FC } from "react";
import Head from "next/head";
import Header from "../../../components/header";
import CardList from "../../../components/cards/CardList";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

function Description({
  lista,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <div className="containerFather">
        {lista.map((producto: any) => {
          return (
            <div key={producto.id}>
              <CardList
                key={`${producto.id}`}
                href={`${producto.nombre}`}
                imagen={`${producto.urlImagen}`}
                altImagen={` ${producto.categoria} ${producto.nombre}`}
                titulo={producto.nombre}
                descripcion={producto.descripcion}
                precio={`${producto.precio}`}
              />
            </div>
          );
        })}
        <div style={{ height: "3rem" }}></div>
        <style jsx>{`
          @media only screen and (min-width: 768px) {
            .containerFather {
              display: grid;
              grid-template-columns: auto auto;
              justify-content: center;
            }
          }
        `}</style>
      </div>
    </>
  );
}

const url = process.env.NEXT_PUBLIC_VERCEL_URL;

export const getStaticPaths: GetStaticPaths = async () => {
  // (`http://${url}/api/dataCategorias`);
  const res = await fetch(`http://localhost:3000/api/dataCategorias`
  );
  const posts = await res.json();

  const paths = posts.map((listaPath: any) => ({
    params: { listProduct: listaPath.categoria },
  }));
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {

  //(`http://${url}/api/dataPizza`);
  const res = await fetch(`http://localhost:3000/api/dataPizza`);
  const lista = await res.json();
  console.log(lista);

  return {
    props: {
      lista,
    },
    revalidate: 10, // In seconds
  };
};

export default Description;
