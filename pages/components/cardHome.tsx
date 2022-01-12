import Image from 'next/image'
import empanadas from '../../public/assets/img/categoriaEmpanadas.png'
import pizzas from '../../public/assets/img/categoriaPizzas.png'
import postres from '../../public/assets/img/categoriaPostres.png'
import bebidas from '../../public/assets/img/categoriaBebidas.png'
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
                    <Image src={empanadas} alt="Imagen de Empanadas" layout='responsive' />
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
                    <Image src={pizzas} alt="Imagen de Pizza" layout='responsive' />
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
                    <Image src={postres} alt="Imagen de Postre" layout='responsive' />
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
                     <Image src={bebidas} alt="Imagen de Bebida" layout='responsive' />
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