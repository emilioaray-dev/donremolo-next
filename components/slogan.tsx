import Image from 'next/image'


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
          bottom: 1rem;
          display: block;
          width: calc(100% - 2rem);
          max-width: 24rem;
        }
        @media only screen and (min-width:820px) {
        .footerFloat {
          right: 2rem;
        }
      }
      `}</style>

      <div className="containerSlogan">
        <picture className=" footerFloat">
          <Image src="/assets/img/slogan.svg" alt="Logo" width={257} height={56}  layout='responsive' priority />
        </picture>
      </div>

    </div>
  )
}

export default Slogan