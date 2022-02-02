import Image from 'next/image';
import Link from 'next/link';

const CardHome = () => {
  return (
    <>
      <style jsx>{` 
      .container {
        display: grid;
        height: 62vh;
        align-content: center;
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
        background-color: var(--brandColorWhite);
        height: fit-content;
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
        font-family: var(--Home-Card-fontFamily);
        font-size: 0.875rem;
      }
    `}</style>
      <section className="container">

        <div className="containerCardCategories">

          <Link href="#">
            <a>
              <div className="cardCategories">
                <div className="effectTranslateY">
                  <div className="imgGrid">
                    <picture className="imgCategories" >
                      <Image src="/assets/img/categoriaEmpanadas.png" alt="Imagen de Empanadas" width={512} height={384} layout="responsive" priority />
                    </picture>
                  </div>
                  <h2 className="titleCategories">Empanadas</h2>
                </div>
              </div>
            </a>
          </Link>

          <Link as="/pizzar" href="/listabase">
            <a>
              <div className="cardCategories">

                <div className="effectTranslateY">
                  <div className="imgGrid">
                    <picture className="imgCategories" >
                      <Image src="/assets/img/categoriaPizzas.png" alt="Imagen de Pizza" width={512} height={384} layout="responsive" priority />
                    </picture>
                  </div>
                  <h2 className="titleCategories">Pizzas</h2>
                </div>

              </div>
            </a>
          </Link>

          <Link href="#">
            <a>
              <div className="cardCategories">
                <div className="effectTranslateY">
                  <div className="imgGrid">
                    <picture className="imgCategories" >
                      <Image src="/assets/img/categoriaPostres.png" alt="Imagen de Postre" width={512} height={384} layout="responsive" priority />
                    </picture>
                  </div>
                  <h2 className="titleCategories">Postres</h2>
                </div>
              </div>
            </a>
          </Link>

          <Link href="#">
            <a>
              <div className="cardCategories">
                <div className="effectTranslateY">
                  <div className="imgGrid">
                    <picture className="imgCategories" >
                      <Image src="/assets/img/categoriaBebidas.png" alt="Imagen de Bebida" width={512} height={384} layout="responsive" priority />
                    </picture>
                  </div>
                  <h2 className="titleCategories">Bebidas</h2>
                </div>
              </div>
            </a>
          </Link >

        </div >
      </section >
    </>

  );
};
export default CardHome;