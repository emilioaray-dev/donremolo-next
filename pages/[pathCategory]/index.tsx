import Head from "next/head";
import Header from "../../components/header";
import CardList from "../../components/cards/CardList";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import slugify from "slugify";
import useRequest from "../../lib/useRequest";
import useSWR from "swr";

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

  // Devuelve un Json Filtrado por categoria que haga match con el router pathCategory
  const listaFiltrada = Lista.filter(
    (p: any) => slugify(p.categoria, { lower: true }) === pathCategory
  );
  // console.log({ listaFiltrada });
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

  const { data } = useRequest({
    url: "/api/data",
  });
  console.log(data);
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
          <style jsx>{`
            @media only screen and (min-width: 768px) {
              .containerFather {
                display: grid;
                grid-template-columns: auto auto;
                justify-content: center;
                grid-gap: 0rem 1rem;
              }
            }
            .containerFather {
              display: grid;
              justify-items: center;
              padding: var(--margen-horizontal);
              max-width: var(--maxWidth-container);
              margin: 0 auto;
              width: 100vw;
            }
          `}</style>
        </div>
        <div style={{ height: "5rem" }}></div>
      </main>
    </>
  );
}
const url = process.env.NEXT_PUBLIC_VERCEL_URL;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.URL_fetchCategorias);

  const posts = await res.json();
  const titleDescription = posts.map((td: any) => td.categoria);
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
  const res = await fetch(process.env.URL_fetchDataAll);
  const Lista = await res.json();

  let listCategory = Lista.map((lc: any) => lc.categoria);

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
