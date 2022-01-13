import Image from 'next/image'


const Header = () => {
  return (
    <header>
        <nav className="cardNavbar">
          <div>
            <picture className="logo" >
              <Image src="/assets/img/Logo_DonRemolo.svg" alt="Logo" width={100} height={100} priority/>
            </picture>
            <div className="titleNav">Nuestro Menú!</div>
          </div>
        </nav>
      </header>

  );
}
export default Header;