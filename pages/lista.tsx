import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function ListaProducto({ lista }) {
  return (
    <>
      {lista.map((lista) => {
        return (
          <div key={lista.titulo}>
            <style jsx>{`
        .container {
          padding: var(--margen-horizontal);
          max-width: var(--maxWidth-container);
          margin: 0 auto;
        }
        .card{
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 0.625rem;
          background-color: var(--Cards-Colors);
          height: fit-content;
          min-height: 112px;
          padding: 12px;
          margin-bottom: 1.2rem;
        }
        .containerGrid {
          display: grid;
          grid-template-columns: max-content auto;
        }
        picture {
          display: grid;
          width:  7rem;
          height: 7rem;
        }
        .rowGrid {
          display: grid;
          grid-template-rows: min-content min-content auto;
          margin-left: 1rem;
          overflow-wrap: break-word;
        }
        h2 {
          font-size: 16px;
          font-weight: 600;
          color: var(--color-Negro);
          margin-bottom: 6px;
        }
        .description {
          display: -webkit-box; /* Caja Limitada */
          -webkit-line-clamp: 3; /* Maximo 3 lineas */
          -webkit-box-orient: vertical; /* Caja Vertical */
          overflow: hidden;
          height: 3.5rem; 
          font-size: 12px;
          font-weight: 300;
          color: var(--color-Negro);
          opacity: 0.8;
        }
        footer {
          display: grid;
          display: grid;
          align-items: end;
          justify-items: end;
          margin-right: 1rem;
          color: var(--color-Rojo);
          font-weight: 600;
          opacity: 0.8;
        }
        .espacioFinal {
          height: 3rem;
        }
      }
      `}</style>
            <Link href="#">
              <a>
                <div className="container">
                  <article className="containerGrid card">
                    <picture>
                      <Image
                        src={`${lista.urlImagen}`}
                        alt={` Pizza ${lista.titulo}`}
                        width={100}
                        height={100}
                        layout="responsive"
                        priority
                      />
                    </picture>
                    <div className="rowGrid">
                      <h2>{lista.titulo}</h2>
                      <div className="description">{lista.descripcion}</div>
                      <footer>{` $${lista.precio}`}</footer>
                    </div>
                  </article>
                </div>
              </a>
            </Link>
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
