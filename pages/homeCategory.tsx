import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Key } from "react";
import CardHome from "../components/cards/CardHome";

export const getStaticProps: GetStaticProps = async (context) => {
  // Res Lista Categoria (`http://${url}/api/dataCategorias`);
  const resCategories = await fetch(`http://localhost:3000/api/dataCategorias`
  );
  // Lista Categoria to Json
  const listCategories = await resCategories.json();

  return {
    props: {
      listCategories,
    },
    revalidate: 10, // In 10 seconds Next.js will attempt to re-generate the page
  };
};

function HomeCategory({ listCategories, }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {listCategories.map((category: { id: Key | null | undefined; categoria: any; urlImagen: any; nombre: any; }) => {
        return (
          <div key={category.id}>
            <CardHome
              id=""
              href={`/${category.categoria}`}
              imagen={`${category.urlImagen}`}
              altImagen={`Imagen de ${category.categoria}`}
              titulo={category.nombre}
            />
          </div>
        );
      })}
    </>
  );
}
export default HomeCategory;
