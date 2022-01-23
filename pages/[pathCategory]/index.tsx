
import Head from "next/head";
import Header from "../../components/header";
import CardList from "../../components/cards/CardList";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from 'next/router';



function CardRender({ Lista }: InferGetStaticPropsType<typeof getStaticProps>) {
  type Lista = {
    id: number;
    categoria: string;
    nombre: string;
    descripcion: string;
    precio: string;
    urlImagen: string;
  };

  const router = useRouter();
  const { pathCategory } = router.query;

  const listaFiltrada = Lista.filter((p: any) => p.categoria === pathCategory);

  return (
    <>
      <Head>
        <title>Don Rémolo | </title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header
        hideBackbuttom={""} //'none' Oculta el bottom de back
        hideTitle={"none"} // 'none' Oculta el titulo o --title--
        title={"Nuestro Menú"} // Texto a mostrar
        hideIconNav={""} //'hide' Oculta Los Botonos del Nav
      />

      <main>
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
            .containerFather {
              display: grid;
            }
          `}</style>
        </div>
      </main>
    </>
  );
}
const url = process.env.NEXT_PUBLIC_VERCEL_URL;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://donremolo-next.vercel.app/api/dataCategorias");
  const posts = await res.json();

  const paths = posts.map((listaPath: any) => ({
    params: {
      pathCategory: listaPath.categoria
    }
  })
  );

  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  // (`http://${url}/api/dataAll`);
  const res = await fetch(`https://donremolo-next.vercel.app/api/dataAll`);
  const Lista = await res.json();
  //  console.log(Lista);

  return {
    props: {
      Lista,
    },
    revalidate: 10, // In seconds
  };
};

export default CardRender;
