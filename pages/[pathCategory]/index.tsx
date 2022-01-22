import { FC } from "react";
import Head from "next/head";
import Header from "../../components/header";
import CardList from "../../components/cards/CardList";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from 'next/router'



function CardRender({ lista }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { pathCategory } = router.query

  const listaFiltrada = lista.filter((p : any) => p.categoria === pathCategory)
  
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
        {listaFiltrada.map((producto: any) => {
          return (
            <div key={producto.id}>
              <CardList
                key=""
                href="#"
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/dataCategorias");
  const posts = await res.json();

  const paths = posts.map((listaPath: any) => ({
    params: { pathCategory: listaPath.categoria },
  }));
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch("http://127.0.0.1:3000/api/dataAll");
  const lista = await res.json();
//  console.log(lista);

  return {
    props: {
      lista,
    },
    revalidate: 10, // In seconds
  };
};

export default CardRender;
