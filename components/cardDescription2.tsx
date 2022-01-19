import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function CardDescription2() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("../api/datajs")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
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
      {DibujarPlato(data.categorias[0].platos[0])}
    </div>
  );
}



function DibujarPlato(p) {
  return (
    <>
      <style jsx>{`
        .container {
          padding: var(--margen-horizontal);
          max-width: var(--maxWidth-container);
          margin: 0 auto;
        }
        .cardMaster{
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
          align-items: center;
          padding: 0px 1.93rem;
        }
        picture {
          display: grid;
          width:  7rem;
          height: 7rem;
        }
        .rowGrid {
          display: grid;
          grid-template-rows: auto;
          margin-left: 1rem;
          overflow-wrap: break-word;
        }
        h1 {
          color: var(--color-Negro);
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
          font-size: 12px;
          font-weight: 300;
          color: var(--color-Negro);
          opacity: 0.8;
        }
        .price {
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
        .cardTitle {
          display: grid;
          align-content: center;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 0.625rem;
          background-color: var(--Cards-Colors);
          height: fit-content;
          text-align: center;
          height: 3.88rem;
          margin: 0.5rem 0.2rem 1.5rem;
        }
        .porciones {
          text-align: center;
          font-size: 12px;
          font-weight: 300;
          color: var(--color-Negro);
        }
        .marginTop {
          margin-top: 1rem;
        }
        .cuentaGrid {
          display: grid;
          align-items: center;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 2rem;
          padding: 0px 1.93rem;
        }
        input {
          width: 4rem;
          text-align: center;
          padding: 0.5rem;
          margin: 0;
          background-color: var(--color-Rojo);
          color: #fff;
          border: none;
          border-radius: 5px;
        }
        .total {
          display: grid;
          align-content: center;
          width: 4rem;
          text-align: right;
          padding: 0.5rem;
          background-color: var(--color-Rojo);
          color: #fff;
          border: none;
          border-radius: 5px;
          height: 34px;
          height: 1.94rem;
        }
        button {
          margin: 2.5rem 0 1rem;
          align-items: center;
          padding: 10px;
          background: var(--color-Rojo);
          color: #fff;
          font-family: OpenSans;
          border-radius: 10px;
          border: 0;
          width: 100%;
        }
        button:hover {
          opacity: 0.8;
        }
      }
      `}</style>

      <div className="container">
        <article className="cardMaster">
          <div className="cardTitle">
            <h1>{p.titulo}</h1>
          </div>
          <div className="containerGrid">
            <picture>
              <Image
                src="/assets/img/pizzas/mozzarella.png"
                alt="Pizza Mozzarella"
                width={100}
                height={100}
                layout="responsive"
                priority
              />
            </picture>
            <div className="rowGrid">
              <div className="description">{p.descripcion}</div>
            </div>
            <div className="porciones marginTop">8 Porciones</div>
            <div className="price marginTop">$1134</div>
          </div>
          <div className="cuentaGrid">
            <div style={{ fontSize: "14px" }}>Cantidad</div>
            <form>
              <input
                id="cantidad"
                type="number"
                name="cantidad"
                min="1"
                max="10"
              ></input>
            </form>
            <span style={{ textAlign: "right", marginRight: "0.5rem" }}>$</span>
            <span className="total">${p.precio}</span>
          </div>
          <div style={{ padding: "0px 1.93rem" }}>
            <button>Agregar al Pedido</button>
          </div>
        </article>
      </div>
    </>
  );
}

export default CardDescription2;