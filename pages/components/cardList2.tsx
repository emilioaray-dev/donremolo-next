import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function CardList2() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/datajs")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return (
    <p
      style={{
        display: "block",
        position: "fixed",
        margin: "0 auto",
        textAlign: "center",
        width: "100%",
        height: "100vh",
        transform: "translateY(26%)",
      }}
    >
      Loading...
    </p>
  );
  if (!data) return <p>No profile data</p>;

  return (
    <div>
     
      {/*   {data.categorias.map(c => DibujarCategoria(c))} */}
      {DibujarCategoria(data.categorias[0])}
    </div>
  );
}

function DibujarCategoria(c) {
  return (
    <>
      {/*       
      <div>
        <b>{c.nombre}</b>
      </div>
 */}
      {c.platos.map((p) => DibujarPlatos(p))}
    </>
  );
}



function DibujarPlatos(p) {
  return (
    <div key={p.titulo}>
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
      <Link as={`/pizzas/${p.titulo}`} href={`/[pizzas]/${p.titulo}`}>
        {/*      
        <Link as="/pizzas/{p.titulo}" href="/[pizzas]/Mozzarella">
        <Link as={`/pizzas/${p.titulo}`} href={`/$[pizzas]/{p.titulo}`}> */}
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src={`${p.urlImagen}`}
                  alt={` Pizza ${p.titulo}`}
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>{p.titulo}</h2>
                <div className="description">{p.descripcion}</div>
                <footer>{` $${p.precio}`}</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default CardList2;
