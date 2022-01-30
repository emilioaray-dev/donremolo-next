import Head from "next/head";
import Header from "../../../components/header";
import CardDetalle from "../../../components/cards/cardDetalle";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import slugify from "slugify";



function Detalle({ Lista }: InferGetStaticPropsType<typeof getStaticProps>) {
  type Lista = {
    id: number;
    categoria: string;
    nombre: string;
    descripcion: string;
    precio: string;
    urlImagen: string;
  };

  const router = useRouter();
  const { desctiptionProduct } = router.query;

  const listaFiltrada = Lista.filter(
    (p: any) => slugify(p.nombre, { lower: true }) === desctiptionProduct
  );

  // console.log(listaFiltrada);
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
        {listaFiltrada.map((producto: any) => {
          return (
            <div key={producto.id}>
              <CardDetalle
                titulo={producto.nombre}
                imagen={producto.urlImagen}
                altImagen={`${producto.categoria} ${producto.nombre}`}
                descripcion={producto.descripcion}
                porciones={0}
                precio={producto.precio}
                cantidad={""}
              />
              ;
            </div>
          );
        })}
      </main>
    </>
  );
}

{
  /*  */
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://donremolo-next.vercel.app/api/dataAll");
  const posts = await res.json();

  const paths = posts.map((listaPath: any) => ({
    params: {
        pathCategory: slugify(listaPath.categoria, { lower: true }),
        desctiptionProduct: slugify(listaPath.nombre, { lower: true }),
    },
  
  }));

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




export default Detalle;
