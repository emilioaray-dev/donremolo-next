import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  id: string;
  href: string;
  imagen: string;
  altImagen: string;
  titulo: string;
}

const CardHome: FC<Props> = ({
  id,
  href,
  imagen,
  altImagen,
  titulo,
}) => (
  <>
    <section className="container">
      <div className="containerCardCategories">
        <div key={id} className="containerCardCategories">
          <Link href={href}>
            <a>
              <div className="cardCategories">
                <div className="effectTranslateY">
                  <div className="imgGrid">
                    <picture className="imgCategories">
                      <Image
                        src={imagen}
                        alt={altImagen}
                        width={512}
                        height={384}
                        layout="responsive"
                        priority
                      />
                    </picture>
                  </div>
                  <h2 className="titleCategories">{titulo}</h2>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
    {/* Style of Component-----------------------------------*/}
    <style jsx>{`
      @media only screen and (min-width: 768px) {
        .containerCardCategories {
          grid-template-columns: auto auto auto auto !important;
        }
      }
      .container {
        position: absolute;
        width: 100vw;
        top: 50%;
        transform: translateY(-40%);
      }

      .containerCardCategories {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
      }

      .cardCategories {
        min-width: 8rem;
        max-width: 20rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
        border-radius: 0.625rem;
        margin: 2rem 1rem 1rem 1rem;
        background-color: var(--Cards-Colors);
        height: 7.2rem;
      }

      .effectTranslateY {
        display: grid;
        transform: translateY(-30%);
        justify-items: center;
      }

      .imgGrid {
        display: grid;
        min-height: 6rem;
        padding: 0rem 0.5rem;
        width: 100%;
      }

      .titleCategories {
        font-family: OpenSans;
        font-size: 0.875rem;
      }
    `}</style>
  </>
);

export default CardHome;
