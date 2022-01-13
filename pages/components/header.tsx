import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <>
    <header>
      <nav className="cardNavbar">
        <div>
          <Link href="/">
            <a>
              <picture className="logo" >
                <Image src="/img/Logo_DonRemolo.svg" alt="Logo" width={100} height={100} priority />
              </picture>
            </a>
          </Link>
          <div className="titleNav">Nuestro Menú!</div>
        </div>
      </nav>
    </header>
      <div className='marginTopNav'/>
      </>

  );
}
export default Header;