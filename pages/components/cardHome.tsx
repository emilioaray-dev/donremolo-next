import Image from 'next/image'
import Link from 'next/link'

const CardHome = () => {
  return (
    <section className="container">

      <div className="containerCardCategories">

        <Link href="#">
          <a>
            <div className="cardCategories">
              <div className="effectTranslateY">
                <div className="imgGrid">
                  <picture className="imgCategories" >
                    <Image src="/img/categoriaEmpanadas.png" alt="Imagen de Empanadas" width={512} height={384} layout="responsive" priority />
                  </picture>
                </div>
                <h2 className="titleCategories">Empanadas</h2>
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
                    <Image src="/img/categoriaPizzas.png" alt="Imagen de Pizza" width={512} height={384} layout="responsive" priority  />
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
                    <Image src="/img/categoriaPostres.png" alt="Imagen de Postre" width={512} height={384} layout="responsive" priority />
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
                     <Image src="/img/categoriaBebidas.png" alt="Imagen de Bebida" width={512} height={384} layout="responsive" priority />
                  </picture>
                </div>
                <h2 className="titleCategories">Bebidas</h2>
              </div>
            </div>
          </a>
        </Link >

      </div >
    </section >

  );
}
export default CardHome;