import Link from "next/link";

export default function CartPedidoFooter() {
  return (
    <>
      <footer className="buttonFloat">
        <div className="buttonShop">
          <div className="buttonShop__card">
            <div className="buttonShop__card__grid">
              <div className="buttonShop__greed">
                <Link href="/pizzas">
                  <a>
                    <button className="buttonShop__primary br">
                      Agregar más Productos
                    </button>
                  </a>
                </Link>
              </div>
              <button className="buttonShop__cancel br">Cancelar</button>
              <button className="buttonShop__buy br">Continuar</button>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .buttonFloat {
          position: fixed;
          z-index: 1;
          width: 100%;
          padding: var(--margen-horizontal);
          bottom: 1.2rem;
        }

        .buttonShop {
          display: grid;
          align-items: center;
          margin: 0 auto;
          margin-top: 0.5rem;
          max-width: var(--maxWidth-container);
        }

        .buttonShop__card {
          box-shadow: 0 2px 12px 0 rgb(0 0 0 / 20%);
          border-radius: 0.625rem;
          background-color: #ffffff4d;
          height: fit-content;
          backdrop-filter: blur(3px);
          padding: 12px;
        }

        .buttonShop__card__grid {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
        }

        .br {
          border-radius: 10px;
          height: 50px;
        }

        .buttonShop__greed {
          grid-column-start: 1;
          grid-column-end: 3;
        }

        .buttonShop__primary {
          margin-bottom: 0.8rem;
          width: 100%;
          background-color: var(--brandColorRed);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--brandColorWhite);
          border: none;
          cursor: pointer;
        }

        .buttonShop__cancel {
          width: 9rem;
          color: var(--brandColorRed);
          background-color: var(--brandColorGrey2);
          font-size: 1.1rem;
          font-weight: 700;
          border-color: var(--brandColorRed);
          border-width: 2px;
          cursor: pointer;
        }

        .buttonShop__buy {
          width: 9rem;
          background-color: var(--brandColorRed);
          color: var(--brandColorWhite);
          font-size: 1.1rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
