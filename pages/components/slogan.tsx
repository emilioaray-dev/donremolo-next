import Image from 'next/image'
import slogan from '../../public/assets/img/slogan.svg'
function Slogan() {
  return (
    <div>

      <style jsx>{`
        .containerSlogan {
          margin: var(--margen-horizontal);
        }
        .grid {
          display: grid;
        }
        .footerFloat {
          position: absolute;
          bottom: 4rem;
          display: block;
          width: calc(100% - 2rem);
        }
      `}</style>

      <div className="containerSlogan">
        <picture className=" footerFloat">
          <Image src={slogan} alt="Logo" layout='responsive' />
        </picture>
      </div>

    </div>
  )
}

export default Slogan