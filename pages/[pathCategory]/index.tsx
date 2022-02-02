import Head from "next/head";
import Header from "../../components/header";
import CardList from "../../components/cards/CardList";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import slugify from "slugify";
import ShoppingCart from "../../components/cards/shoppingCart";

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

  const listaFiltrada = Lista.filter(
    (p: any) => slugify(p.categoria, { lower: true }) === pathCategory
  );
  //  console.log({pathCategory})

  // titleDescriptionAll Regresa un map de todas las .categorías de la lista
  const titleDescriptionAll = listaFiltrada.map((td: any) => td.categoria);

  // titleDescription elige el nombre de la posición 0 del listado de Categoria
  const titleDescription = titleDescriptionAll[0];

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
  // console.log(titleDescription);
  return (
    <>
      <Head>
        <title>{`Don Rémolo | ${titleDescription}`} </title>
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
        <div className="containerFather">
          {listaFiltrada.map((producto: any) => {
            return (
              <div key={producto.id}>
                <CardList
                  key=""
                  href={`/${slugify(producto.categoria, {
                    lower: true,
                  })}/${slugify(producto.nombre, { lower: true })}`}
                  imagen={`${producto.urlImagen}`}
                  altImagen={` ${producto.categoria} ${producto.nombre}`}
                  titulo={producto.nombre}
                  descripcion={producto.descripcion}
                  precio={`${producto.precio}`}
                />
              </div>
            );
          })}
          <div style={{ height: "4rem" }}></div>
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
      <ShoppingCart number={1} />
    </>
  );
}
const url = process.env.NEXT_PUBLIC_VERCEL_URL;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://donremolo-next.vercel.app/api/dataCategorias"
  );
  const posts = await res.json();
  const titleDescription = posts.map((td: any) => (td.categoria));
  const paths = posts.map((listaPath: any) => ({
    params: {
      pathCategory: slugify(listaPath.categoria, { lower: true }),
    },
  }));

  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 
  const res = await fetch(`https://donremolo-next.vercel.app/api/dataAll`);
  const Lista = await res.json();

  let listCategory = Lista.map((lc: any) => (lc.categoria));

  let filterListCategory = [...new Set(listCategory)];
  // console.log(filterListCategory);


  return {
    props: {
      Lista,
    },
    revalidate: 10, // In seconds
  };
};

export default CardRender;
