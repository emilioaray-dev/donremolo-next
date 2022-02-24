import { FC, useState } from "react";
import Image from "next/image";
import ShoppingCart from "./shoppingCart";

export default function CardDescription(props: {
  contador: any;
  titulo: string;
  imagen: string;
  altImagen: string;
  descripcion: string;
  porciones: string;
  precio: number;
  cantidad: number;
  value: number;
}) {
  const [input, setInput] = useState("1");

  return (
    <>
      <div className="container">
        <article className="cardMaster">
          <div className="cardTitle">
            <h1>{props.titulo}</h1>
          </div>
          <div className="containerGrid">
            <picture className="roundPicture">
              <Image
                src={`${props.imagen}`}
                alt={`${props.altImagen}`}
                width={100}
                height={100}
                layout="responsive"
                priority
              />
            </picture>
            <div className="rowGrid">
              <div className="description">{props.descripcion}</div>
            </div>
            <div className="porciones marginTop">8 Porciones</div>
            <div className="price marginTop">$ {props.precio}</div>
          </div>

          <div className="cuentaGrid">
            <div style={{ fontSize: "16px" }}>Cantidad</div>
            <form>
              <input
                value={input}
                onInput={(e) => setInput(e.target.value)}
                id="cantidad"
                type="number"
                name="cantidad"
                min="1"
                step="1"
                max="20"
                pattern="[0-9]*"
                inputMode="numeric"
              ></input>
            </form>
            <span style={{ textAlign: "right", marginRight: "0.5rem" }}>$</span>
            <span className="total">{input * props.precio}</span>
          </div>

          <div style={{ padding: "0px 1.93rem" }}>
            <button onClick={() => bajarCuenta()}>Agregar al Pedido</button>
          </div>
        </article>
      </div>

      <div className="espacioFinal"></div>
      <style jsx>{`
        .container {
          padding: var(--margen-horizontal);
          max-width: var(--maxWidth-container);
          margin: 0 auto;
        }
        .cardMaster {
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 0.625rem;
          background-color: var(--brandColorWhite);
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
        .roundPicture {
          display: grid;
          width: 7rem;
          height: 7rem;
          border-radius: 50%;
          overflow: hidden;
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
          font-size: 2rem;
          font-weight: 600;
          color: var(--color-Negro);
          margin-bottom: 6px;
        }
        .description {
          display: -webkit-box; /* Caja Limitada */
          -webkit-line-clamp: 3; /* Maximo 3 lineas */
          -webkit-box-orient: vertical; /* Caja Vertical */
          overflow: hidden;
          font-size: 14px;
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
          color: var(--brandColorRed);
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
          background-color: var(--brandColorWhite);
          height: fit-content;
          text-align: center;
          height: 3.88rem;
          margin: 0.5rem 0.2rem 1.5rem;
        }
        .porciones {
          text-align: center;
          font-size: 14px;
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
          background-color: var(--brandColorRed);
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
          background-color: var(--brandColorRed);
          color: #fff;
          border: none;
          border-radius: 5px;
          height: 34px;
          height: 1.94rem;
          outline-width: 0px;
        }
        button {
          margin: 2.5rem 0 1rem;
          align-items: center;
          padding: 10px;
          background: var(--brandColorRed);
          color: #fff;
          font-family: OpenSans;
          border-radius: 10px;
          border: 0;
          width: 100%;
        }
        button:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}
