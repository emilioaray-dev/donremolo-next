import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
  imagen: string;
  altImagen: string;
  titulo: string;
  descripcion: string;
  precio: string;
}

const CardList: FC<Props> = ({
  href,
  imagen,
  altImagen,
  titulo,
  descripcion,
  precio,
}) => (
  <>
    <Link href={href}>
      <a>
        <div className="containerCardList">
          <div className="cardList">
            <article className="cardList__grid">
              <picture className="cardList__imgGrid">
                <Image
                  src={imagen}
                  alt={altImagen}
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="cardList__rowGrid">
                <h2 className="cardList__title">{titulo}</h2>
                <div className="cardList__description">{descripcion}</div>
                <footer className="cardList__price">${precio}</footer>
              </div>
            </article>
          </div>
        </div>
      </a>
    </Link>

    <style jsx>{`
      .containerCardList {
        display: grid;
        justify-items: center;
        max-width: var(--maxWidth-container);
        padding: 0rem 1rem 0rem 0rem;
        margin: 0 auto;
        width: calc(100vw - 1rem);
      }
      .cardList {
        box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
        border-radius: 0.625rem;
        background-color: var(--brandColorWhite);

        height: fit-content;
        min-height: 112px;
        padding: 12px;
        margin: 0 0 1.2rem 0rem;
        width: 100%;
      }
      .cardList__grid {
        display: grid;
        grid-template-columns: max-content auto;
      }
      .cardList__imgGrid {
        display: grid;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        overflow: hidden;
      }
      .cardList__rowGrid {
        display: grid;
        grid-template-rows: min-content min-content auto;
        margin-left: 1rem;
        overflow-wrap: break-word;
      }
      .cardList__title {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--color-Negro);
        margin-bottom: 6px;
        margin-block-start: 0em;
        margin-block-end: 0.1em;
      }
      .cardList__description {
        display: -webkit-box; /* Caja Limitada */
        -webkit-line-clamp: 3; /* Maximo 3 lineas */
        -webkit-box-orient: vertical; /* Caja Vertical */
        overflow: hidden;
        height: 3.5rem;
        font-size: 0.9rem;
        font-weight: 300;
        color: var(--color-Negro);
        opacity: 0.8;
      }
      .cardList__price {
        display: grid;
        display: grid;
        align-items: end;
        justify-items: end;
        margin-right: 1rem;
        color: var(--brandColorRed);
        font-weight: 600;
        opacity: 0.8;
        font-size: 1.2rem;
      }
      .espacioFinal {
        height: 3rem;
      }
      @media only screen and (min-width: 768px) {
        .containerCardList {
          max-width: calc(var(--maxWidth-container) / 2);
          padding: 0rem;
          width: calc(50vw - 1rem);
        }

        .cardList {
          width: calc(100% - 1rem);
        }
      }
    `}</style>
  </>
);

export default CardList;
