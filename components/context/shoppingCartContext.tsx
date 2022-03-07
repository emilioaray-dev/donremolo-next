import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export function CartProvider() {
  // Set Hook de Cuenta de Artículos
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
  // Funcion de sumar
  const subirCuenta = () => setCount(count + 1);

  // Si es = 0 Apagar el Carro CSS
  let ocultar = "0";
  if (count <= 0) {
    ocultar = "hide"; // Set Style hide Display None
  }
  // Si es >= 1 Activar el Carro CSS
  let activar = "no";
  if (count >= 1) {
    activar = "activo";
  }

  // Router
  let ocultarIsHome = ""; // Set OcultarIsHome Empty Styled
  const router = useRouter();
  const patch = router.pathname;

  // Ocultar Carro en Home
  if (patch == "/") {
    ocultarIsHome = "hide";
  }
  // Ocultar Carro en Pedido
  if (patch == "/pedido") {
    ocultarIsHome = "hide";
  }

  // console.log(patch);
  return (
    <>
      <div className={`shopImgCart ${ocultarIsHome}  `}>
        <div className="shopImgCart__grid">
          <button className="button" onClick={() => bajarCuenta()}>
            -
          </button>
          <div className="margin">
            <Link href="/pedido">
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

          <button className="button" onClick={() => subirCuenta()}>
            +
          </button>
        </div>
        <button className="reset" onClick={() => setCount(initialCount)}>
          Reset
        </button>
      </div>

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

        .margin {
          margin: 0px 1rem;
        }

        button:nth-child(-n + 3) {
          border-radius: 100%;
          height: 30px;
          width: 30px;
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

        .button {
          display: grid;
          align-items: center;
          justify-items: center;
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
          transform: translate(33px, -7px);
          color: var(--brandColorRed);
          font-size: x-small;
          padding: 0.02rem;
          /* border: 1px solid gray; */
        }

        .shopImgCart__badgeGrid--number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.3rem;
          height: 1.3rem;
          font-weight: 600;
          user-select: none;
        }
      `}</style>
    </>
  );
}
