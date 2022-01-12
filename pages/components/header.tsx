import Image from 'next/image'
import logo from '../../public/assets/img/Logo_DonRemolo.svg'

function Header() {
  return (
    <header>
        <nav className="cardNavbar">
          <div>
            <picture className="logo" >
              <Image src={logo} alt="Logo" width={100} height={100} />
            </picture>
            <div className="titleNav">Nuestro Menú!</div>
          </div>
        </nav>
      </header>

  );
}
export default Header;