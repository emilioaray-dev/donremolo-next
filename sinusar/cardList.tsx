import Image from 'next/image';
import Link from 'next/link';


const CardList = () => {
  return (
    <>
      <style jsx>{`
        .container {
          padding: var(--margen-horizontal);
          max-width: var(--maxWidth-container);
          margin: 0 auto;
        }
        .card{
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
          color: var(--brandColorRed);
          font-weight: 600;
          opacity: 0.8;
        }
        .espacioFinal {
          height: 3rem;
        }
      }
      `}</style>

      <Link href="#">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/mozzarella.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Mozzarella</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/napolitana.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Napolitana</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/calabreza.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Calabreza</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/especial.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Especial</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/fugazza.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Fugazza</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/mozzarella.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Mozzarella</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/napolitana.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Napolitana</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/calabreza.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Calabreza</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/especial.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Especial</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="container">
            <article className="containerGrid card">
              <picture>
                <Image
                  src="/assets/img/pizzas/fugazza.png"
                  alt="Pizza Mozzarella"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </picture>
              <div className="rowGrid">
                <h2>Fugazza</h2>
                <div className="description">
                  Mozzarella|Or??gano|Aceitunas |Aceite de oliva
                </div>
                <footer>$1134</footer>
              </div>
            </article>
          </div>
        </a>
      </Link>

      <div className="espacioFinal"></div>
    </>
  );
};

export default CardList;