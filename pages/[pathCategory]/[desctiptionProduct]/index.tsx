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
    precio: number;
    urlImagen: string;
    value: string;
    total: string;
  };

  const router = useRouter();
  const { pathCategory } = router.query;
  const { desctiptionProduct } = router.query;

  const listaCategoriaFiltrada = Lista.filter(
    (p: any) => slugify(p.categoria, { lower: true }) === pathCategory
  );
  //  console.log({pathCategory})

  const listaProductoFiltrada = Lista.filter(
    (p: any) => slugify(p.nombre, { lower: true }) === desctiptionProduct
  );

  // titleDescriptionAll Regresa un map de todas las .categorías de la lista
  const titleDescriptionAll = listaCategoriaFiltrada.map(
    (td: any) => td.categoria
  );

  const titleDescriptionProduct = listaProductoFiltrada.map(
    (td: any) => td.nombre
  );

  // titleDescription elige el nombre de la posición 0 del listado de Categoria
  const titleDescription = titleDescriptionAll[0];
  const titleDetalleDescription = [titleDescriptionProduct[0]];

  let activarNav = "";
  if (titleDescription == "Pizzas") {
    activarNav = "activePizza";
  }
  if (titleDescription == "Bebidas") {
    activarNav = "activeBebidas";
  }
  if (titleDescription == "Empanadas") {
    activarNav = "activeEmpanadas";
  }
  if (titleDescription == "Postres") {
    activarNav = "activePostres";
  }

  //  console.log(titleDescription);
  return (
    <>
      <Head>
        <title>
          {`Don Rémolo | ${titleDescription} | ${titleDetalleDescription}`}{" "}
        </title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header
        hideBackbuttom={""} //'none' Oculta el bottom de back
        hideTitle={"none"} // 'none' Oculta el titulo o --title--
        title={"Nuestro Menú"} // Texto a mostrar
        hideIconNav={""} //'hide' Oculta Los Botonos del Nav
        color={activarNav}
      />

      <main>
        {listaProductoFiltrada.map((producto: any) => {
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
                total={""}
              />
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
