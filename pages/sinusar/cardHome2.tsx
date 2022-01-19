import Image from 'next/image'
import Link from 'next/link'

function CardHome2() {
  return (
    <>
      <section className="container">
        <div className="containerCardCategories">
          <Link href="#">
            <a>
              <div className="cardCategories">
                <div className="effectTranslateY">
                  <div className="imgGrid">
                    <picture className="imgCategories">
                      <Image
                        src="/assets/img/categoriaEmpanadas.png"
                        alt="Imagen de Empanadas"
                        width={512}
                        height={384}
                        layout="responsive"
                        priority
                      />
                    </picture>
                  </div>
                  <h2 className="titleCategories">Empanadas</h2>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </section>
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
          background-color: var(--Cards-Colors);
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
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/dataCategorias");
  const listaCategoria = await res.json();
  console.log(listaCategoria);
  return {
    props: {
      listaCategoria,
    },
    revalidate: 10, // In seconds
  };
}

export default CardHome2;