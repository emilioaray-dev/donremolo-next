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
        <div className="container">
          <article className="containerGrid card">
            <picture>
              <Image
                src={imagen}
                alt={altImagen}
                width={100}
                height={100}
                layout="responsive"
                priority
              />
            </picture>
            <div className="rowGrid">
              <h2>{titulo}</h2>
              <div className="description">{descripcion}</div>
              <footer>${precio}</footer>
            </div>
          </article>
        </div>
      </a>
    </Link>

    <style jsx>{`
        .container {
          padding: var(--margen-horizontal);
          width: max-content;
          max-width: var(--maxWidth-container);
          margin: 0 auto;
        }
        .card{
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 0.625rem;
          background-color: var(--Cards-Colors);
          min-width: 27rem;
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
  </>
);

export default CardList;
