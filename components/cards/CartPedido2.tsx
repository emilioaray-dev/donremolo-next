import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CartPedido2(props: {
  units: any;
  product: any;
  price: any;
}) {
  const [units, setUnits] = useState(1);
  const [product, setProduct] = useState("Producto");
  const [precio, setPrecio] = useState(650);

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const add = (e) => {
    e.preventDefault();
    if (!item) {
      return;
    }
    setItems((items) => [
      ...items,
      {
        id: uuidv4(),
        item,
      },
    ]);
  };
  const remove = (index) => {
    setItems((items) => items.filter((_, i) => i !== index));
  };
  return (
    <>
      <section className="containerCardOrder">
        <div className="cardOrder">
          <div className="cardOrder_grid">
            <div className="cardOrder_title">Cant.</div>
            <div className="cardOrder_title">Productos</div>
            <div className="cardOrder_title-2block">Precio $</div>

            <form className="cardOrder_master" onSubmit={add}>
              <fieldset className="addtest">
                <label>item</label>
                <input value={item} onChange={(e) => setItem(e.target.value)} />
              </fieldset>
              <button type="submit">add item</button>
              <input
                className="cardOrder_units"
                value={units}
                onInput={(e) => setUnits(e.target.value)}
                type="number"
                min="1"
                max="999"
                step="1"
                pattern="[0-9]*"
                inputMode="numeric"
              ></input>
              <div className="cardOrder_units-description">{product}</div>
              <div className="cardOrder_units-price">${units * precio}</div>
              <button className="carOrder_button">
                <picture className="cardOrder_units-trash">
                  <img src="/assets/img/icons/iconTrash.svg" alt="" />
                </picture>
              </button>
            </form>
            {items.map((item, index) => {
              return (
                <div className="cardOrder_master" key={item.id}>
                  <input
                    className="cardOrder_units"
                    value={item.item}
                    onInput={(e) => setItem(e.target.value)}
                    type="number"
                    min="1"
                    max="999"
                    step="1"
                    pattern="[0-9]*"
                    inputMode="numeric"
                  ></input>
                  <div className="cardOrder_units-description">{product}</div>
                  <div className="cardOrder_units-price">
                    ${item.item * precio}
                  </div>
                  <button
                    className="carOrder_button"
                    onClick={() => remove(index)}
                  >
                    <picture className="cardOrder_units-trash">
                      <img src="/assets/img/icons/iconTrash.svg" alt="" />
                    </picture>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="cardOrder_totalGrid">
            <div className="cardOrder_totalGrid-tittle">Total $</div>
            <div className="cardOrder_totalGrid-total">12345</div>
          </div>
        </div>
        <div style={{ marginBottom: "12rem" }}></div>
      </section>
      <style jsx>{`
        .containerCardOrder {
          padding: 0;
          max-width: var(--maxWidth-container);
          margin: 0 auto;
        }
        .cardOrder {
          display: grid;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 0.625rem;
          background-color: var(--brandColorWhite);
          /*
          height: fit-content;
          min-height: 112px;
          margin-bottom: 1.2rem;
          */
          min-height: calc(100vh - 20rem);
          padding: 12px;
          align-content: space-between;
        }

        .addtest {
          grid-column-start: 1;
          grid-column-end: 4;
        }
        .cardOrder_grid {
          display: grid;
          grid-template-columns: max-content auto max-content min-content;
          grid-template-rows: min-content;
          height: fit-content;
        }

        .cardOrder_title,
        .cardOrder_title-2block {
          text-align: center;
          font-weight: 600;
        }

        .cardOrder_title-2block {
          text-align: initial;
          grid-column-start: 3;
          grid-column-end: 5;
        }

        .cardOrder_master {
          display: contents;
        }
        .cardOrder_units {
          margin-top: 0.5rem;
          background: #d9d9d9;
          border-radius: 0.3rem;
          text-align: center;
          height: calc(100% - 0.5rem);
          border: none;
          width: 3rem;
        }
        .cardOrder_units-description {
          margin: 0.5rem 0.5rem 0rem;
          background: #d9d9d9;
          border-radius: 0.3rem;
          padding-left: 0.3rem;
          height: fit-content;
        }

        .cardOrder_units-price {
          margin: 0.5rem 0rem 0rem;
          height: fit-content;
          min-width: 3rem;
        }

        .carOrder_button {
          border: 0;
          background: transparent;
          height: fit-content;
          margin: 0.5rem 0rem 0rem;
          border-radius: 5px;
        }
        .cardOrder_units-trash {
          display: grid;
          width: 1.2rem;
          align-items: center;
          padding: 2px;
        }

        .cardOrder_totalGrid {
          display: grid;
          grid-template-columns: auto max-content;
          margin-top: 2rem;
        }

        .cardOrder_totalGrid-tittle {
          font-size: 24px;
          font-weight: 600;
          text-align: end;
        }

        .cardOrder_totalGrid-total {
          width: 4rem;
          background: var(--brandColorRed);
          display: grid;
          align-items: center;
          justify-items: center;
          color: var(--brandColorWhite);
          margin-left: 0.5rem;
          border-radius: 0.3rem;
        }
        @media (aspect-ratio: 16/9) {
          .containerCardOrder {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}
