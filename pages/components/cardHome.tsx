import Image from 'next/image'
import logo from '../../public/assets/img/Logo_DonRemolo.svg'
import Link from 'next/link'

function CardHome() {
  return (
    <section className="container">

      <div className="containerCardCategories">

        <Link href="#">
          <a>
            <div className="cardCategories">
              <div className="effectTranslateY">
                <div className="imgGrid">
                  <img src="../assets/img/categoriaEmpanadas.png" alt="Imagen de Empanadas" className="imgCategories" />
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
                  <img src="../assets/img/categoriaPizzas.png" alt="Imagen de Empanadas" className="imgCategories" />
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
                  <img src="../assets/img/categoriaPostres.png" alt="Imagen de Empanadas" className="imgCategories" />
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
                  <img src="../assets/img/categoriaBebidas.png" alt="Imagen de Empanadas" className="imgCategories" />
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