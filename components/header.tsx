import Link from "next/link";
import Image from "next/image";
import { FC } from "react";


import IconPizza from "./iconNavs/iconPizza";
import IconEmpanada from "./iconNavs/iconEmpanada";
import IconBebida from "./iconNavs/iconBebida";
import IconHelado from "./iconNavs/iconHelado";



const fillColorActive = "#fff";
const fillColorInactive = "#000";

const Header: FC<{
  hideBackbuttom: string;
  hideTitle: string;
  title: string;
  hideIconNav: string;
}> = ({ hideBackbuttom, hideTitle, title, hideIconNav }) => (
  <>
    <header>
      <nav>
        <div className="container">
          <div className="headerNav">
            <div className={`buttonGrid ${hideBackbuttom}`}>
              <Link href="/">
                <a className="button">
                  <Image
                    src="/assets/img/iconNav/returnAarrow.svg"
                    alt="Buttom Back"
                    width="40px"
                    height="40px"
                  />
                </a>
              </Link>
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
            <div className="gridNav">
              <h1 className={`titleNav ${hideTitle}`}>{title}</h1>

              <Link href="/Pizzas">
                <a className="linkIcon">
                  <div className={`iconNav ${hideIconNav}`}>
                    <IconPizza
                      fill={fillColorInactive}
                      width={38}
                      height={38}
                    />
                  </div>
                </a>
              </Link>

              <Link href="/Empanadas">
                <a className="linkIcon ">
                  <div className={`iconNav pRight ${hideIconNav}`}>
                    <IconEmpanada
                      fill={fillColorInactive}
                      width={38}
                      height={38}
                    />
                  </div>
                </a>
              </Link>

              <Link href="/Bebidas">
                <a className="linkIcon ">
                  <div className={`iconNav pRight ${hideIconNav}`}>
                    <IconBebida
                      fill={fillColorInactive}
                      width={38}
                      height={38}
                    />
                  </div>
                </a>
              </Link>

              <Link href="/Helados">
                <a className="linkIcon ">
                  <div className={`iconNav pRight ${hideIconNav}`}>
                    <IconHelado
                      fill={fillColorInactive}
                      width={38}
                      height={38}
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

      header {
        position: fixed;
        /* Necesario para que sea flotante la barra del Nav*/
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
        background: var(--color-Amarillo);
        border-radius: 17px;
        height: 3rem;
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
        padding-right: 2rem;
      }

      .cardNav {
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 20%);
        backdrop-filter: blur(2px);
        background: var(--background--Nav);
        border-radius: 1rem;
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
        position: absolute;
        margin: 0 auto;
        text-align: center;
        width: 100%;
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

      .linkIcon:hover {
        background-color: var(--color-Rojo);
        border-radius: 10px;
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
        }import IconEmpanada from './iconNavs/iconEmpanada';

      }
    `}</style>
  </>
);
export default Header;
