import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

import IconPizza from "./iconNavs/iconPizza";
import IconEmpanada from "./iconNavs/iconEmpanada";
import IconBebida from "./iconNavs/iconBebida";
import IconHelado from "./iconNavs/iconHelado";
import Router from "next/router";
import { useRouter } from "next/router";

const fillColorActive = "#fff";
const fillColorInactive = "#000";

const Header: FC<{
  hideBackbuttom: string;
  hideTitle: string;
  title: string;
  hideIconNav: string;
  color: string;
}> = ({ hideBackbuttom, hideTitle, title, hideIconNav, color }) => {
  const router = useRouter();
  const { pathCategory } = router.query;

  // console.log(Lista);
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="headerNav">
              <div className={`buttonGrid ${hideBackbuttom}`}>
                <a className="button" onClick={() => Router.back()}>
                  <Image
                    src="/assets/img/iconNav/returnArrow.svg"
                    alt="Buttom Back"
                    width="40px"
                    height="40px"
                  />
                </a>
              </div>

              <div className="gridLogo">
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/img/iconNav/letterLogo.svg"
                      alt="Buttom Back"
                      width="103.25px"
                      height="22.38px"
                    />

                    <Image
                      src="/assets/img/iconNav/moustacheLogo.svg"
                      alt="Buttom Back"
                      width="60.03px"
                      height="18.74px"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="cardNav">
              <h1 className={`titleNav ${hideTitle}`}>{title}</h1>

              <div className="gridNav">
                <Link href="/pizzas">
                  <a id="pizzas" className={`linkIcon ${hideIconNav}`}>
                    <div className={`iconNav ${color}`}>
                      <IconPizza
                        fill={fillColorInactive}
                        width={38}
                        height={38}
                        stroke=""
                      />
                    </div>
                  </a>
                </Link>

                <Link href="/empanadas">
                  <a id="empanadas" className={`linkIcon ${hideIconNav}`}>
                    <div className={`${color} iconNav  pRight `}>
                      <IconEmpanada
                        fill={fillColorInactive}
                        width={38}
                        height={38}
                        stroke=""
                      />
                    </div>
                  </a>
                </Link>

                <Link href="/bebidas">
                  <a id="bebidas" className={`linkIcon ${hideIconNav}`}>
                    <div className={`${color} iconNav pRight `}>
                      <IconBebida
                        fill={fillColorInactive}
                        width={38}
                        height={38}
                        stroke=""
                      />
                    </div>
                  </a>
                </Link>

                <Link href="/postres">
                  <a id="postres" className={`linkIcon ${hideIconNav}`}>
                    <div className={`iconNav pRight ${color}`}>
                      <IconHelado
                        fill={fillColorInactive}
                        width={38}
                        height={38}
                        stroke=""
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="marginTopNav" />
      <style jsx>{`
      .hide {
        visibility: hidden;
      }
      .none {
        display: none !important;
      }

      header {
        position: fixed; /**
        *! Necesario para que sea flotante la barra del Nav*/
        z-index: 1;
        width: 100%;
        padding: var(--margen-horizontal);
      }

      .container {
        display: grid;
        align-items: center;
        margin: 0 auto;
        margin-top: 0.5rem;
        max-width: var(--maxWidth-container);
      }

      .headerNav {
        display: grid;
        grid-template-columns: max-content auto;
        height: var(--header-Nav-height);
        /* box-shadow: 0 2px 12px 0 rgb(0 0 0 / 20%); */
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        background: var(--brandColorYellow);
        border-radius: 17px;
        height: 2.375rem;
      }

      .buttonGrid {
        display: grid;
        height: 100%;
        align-items: center;
        padding: 0 1rem;
      }

      .button {
        display: grid;
        align-items: center;
        background-color: transparent;
        padding: 0 0.3rem 0 0rem;
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
      }

      .gridLogo {
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        align-items: center;
        padding-right: 2.38rem;
      }

      .cardNav {
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 55%);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        background: var(--background--Nav);
        border-radius: 0.5rem;
        height: 67px;
      }

      .gridNav {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        justify-items: center;
        align-items: center;
        height: 100%;
      }

      .titleNav {
        display: grid;
        grid-template-columns: auto;
        height: 100%;
        justify-content: center;
        align-items: center;
      }

      h1 {
        margin-block-start: 0em;
        margin-block-end: 0em;
      }
      .iconNav {
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 5px;
        width: 60px;
        height: 60px;
      }

       #pizzas > .activePizza {
        background-color: var(--brandColorRed);
        border-radius: 10px;
        fill: #fff;
        stroke: #fff;
        transition: background-color 0.5s;
      }

      #empanadas > .activeEmpanadas {
        background-color: var(--brandColorRed);
        border-radius: 10px;
        fill: #fff;
        stroke: #fff;
        transition: background-color 0.5s;
      }

      #bebidas > .activeBebidas {
        background-color: var(--brandColorRed);
        border-radius: 10px;
        fill: #fff;
        stroke: #fff;
        transition: background-color 0.5s;
      }

      #postres > .activePostres {
        background-color: var(--brandColorRed);
        border-radius: 10px;
        fill: #fff;
        stroke: #fff;
        transition: background-color 0.5s;
      }

      .linkIcon,
      svg {
        stroke: #000;
        fill: #000;
      }

      .iconNav:hover,
      svg {
        background-color: var(--brandColorRed);
        border-radius: 10px;
        fill: #fff;
        stroke: #fff;
        transition: background-color 0.5s;
      }

      .linkIcon:hover,
      svg {
        background-color: var(--brandColorRed);
        border-radius: 10px;
        fill: #fff;
        stroke: #fff;
        transition: background-color 0.5s;
      }

      .pRight {
        padding-right: 3px;
      }

      .marginTopNav {
        padding-top: calc(var(--header-Nav-height) + 5.2rem);
      }
      @media (max-width: 768px) and (orientation: landscape) {
        .cardNav {
          display: none !important;
        }import CardRender from '../pages/[pathCategory]/index';

      }
    `}</style>
    </>
  );
};
export default Header;
