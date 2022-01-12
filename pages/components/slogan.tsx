import Image from 'next/image'
import slogan from '../../public/assets/img/slogan.svg'

const Slogan = () => {
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
          max-width: 24rem;
        }
        @media only screen and (orientation:portrait) and (min-width:820px) {
        .footerFloat {
          right: 2rem;
        }
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