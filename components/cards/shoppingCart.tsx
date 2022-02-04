import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CardDescription from "./cardDetalle";

export default function ShoppingCart() {

  let initialCount = 0;
  const [count, setCount] = useState(initialCount);

  // Funcion de restar y si llega a 0 no resta
  function bajarCuenta() {
    if (count >= 0) {
      setCount(count - 1);
    }
    if (count <= 0) {
      setCount(count);
    }
  }
  // Funcion de restar y si llega a 0 no resta
  const subirCuenta = () => setCount(count + 1);


  // Si es = 0 Apagar el Carro CSS
  let ocultar = "0";
  if (count <= 0) {
    ocultar = "hide";
  }
  // Si es >= 1 Activar el Carro CSS
  let activar = "no";
  if (count >= 1) {
    activar = "activo";
  }



  // console.log(activar);
  return (
    <>
      <footer>
        <div className="shopImgCart">
          <div className="shopImgCart__grid">
            <button onClick={() => bajarCuenta()}>
              -
            </button>
            <div className="ma">
              <Link href="">
                <a href="">
                  <picture className={`shopImgCart__picture ${activar}`}>
                    <Image
                      className="shopImgCart__img"
                      src="/assets/img/icons/shoppingCart.svg"
                      alt=""
                      width={30}
                      height={28}
                    />
                  </picture>
                  <div className={`shoppingImgCart__badgeGrid ${ocultar}`}>
                    <span className="shopImgCart__badgeGrid--number">
                      {count}
                    </span>
                  </div>
                </a>
              </Link>
            </div>

            <button onClick={() => subirCuenta()}>
              +
            </button>
          </div>
          <button className="reset" onClick={() => setCount(initialCount)}>
            Reset
          </button>
        </div>
      </footer>

      <style jsx>{`
        .hide {
          display: none !important;
        }
        .shopImgCart {
          position: fixed;
          bottom: 0;
          width: 100vw;
          height: auto;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          background: rgba(255, 255, 255, 0.5);
          text-align: center;
        }

        .shopImgCart__grid {
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
          flex-direction: row;
        }

        .ma {
          margin: 0px 1rem;
        }

        button:nth-child(-n + 3) {
          border-radius: 100%;
          height: 1.5rem;
          width: 1.5rem;
          user-select: none;
          text-align: center;
          vertical-align: middle;
        }
        button.reset {
          border-radius: 5px;
          width: auto;
          user-select: none;
          text-align: center;
          vertical-align: middle;
        }

        .shopImgCart__picture {
          background: var(--brandColorGrey1);
          padding: 10px 11px 6px 10px;
          border-radius: 50%;
          user-select: none;
        }

        .shopImgCart__picture.activo {
          background: var(--brandColorRed);
        }

        Image .shopImgCart__img {
          width: 1.8rem;
          transform: translateX(-3px);
        }

        .shoppingImgCart__badgeGrid {
          position: absolute;
          top: 0;
          background: #f1f1f1;
          display: flex;
          justify-content: center;
          border-radius: 50%;
          transform: translate(39px, -2px);
          color: var(--brandColorRed);
          font-size: small;
          padding: 2px;
        }

        .shopImgCart__badgeGrid--number {
          display: flex;
          justify-content: center;
          width: 1rem;
          font-weight: 600;
          user-select: none;
        }
      `}</style>
    </>
  );
}