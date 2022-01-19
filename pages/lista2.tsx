import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardComponent from "../components/listado/cardComponent";

function ListaProducto({ lista }) {
  return (
    <>
      {lista.map((lista) => {
        return (
          <div key={lista.id}>
            <CardComponent  
              href="#"
              imagen={lista.urlImagen}
              altImagen={lista.titulo}
              titulo={lista.titulo}
              descripcion={lista.descripcion}
              precio={lista.precio}
            />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/dataPizza");
  const lista = await res.json();

  console.log(lista);

  return {
    props: {
      lista,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export default ListaProducto;
