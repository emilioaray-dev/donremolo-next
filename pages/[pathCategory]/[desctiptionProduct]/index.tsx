import Head from "next/head";
import Header from "../../../components/header";
import CardDetalle from "../../../components/cards/cardDetalle";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import slugify from "slugify";

function Detalle ({  }: InferGetStaticPropsType<typeof getStaticProps>) {
 

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
       foot
      </main>
    </>
  );
}



export default Detalle;
