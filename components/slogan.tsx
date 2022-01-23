import Image from 'next/image'


const Slogan = () => {
  return (
    <>
      <div className="containerSlogan">
        <picture className=" footerFloat">
          <Image
            src="/assets/img/slogan.svg"
            alt="Logo"
            width={257}
            height={56}
            layout="responsive"
            priority
          />
        </picture>
      </div>
      <style jsx>{`
        .containerSlogan {
          margin: var(--margen-horizontal);
        }
        .grid {
          display: grid;
        }
        .footerFloat {
          position: absolute;
          bottom: 0.8rem;
          display: block;
          width: calc(100% - 2rem);
          max-width: 24rem;
        }
        @media only screen and (min-width: 820px) {
          .footerFloat {
            right: 2rem;
          }
        }
        @media (max-width: 768px) and (orientation: landscape) {
          .footerFloat {
            right: 2rem;
          }
          .footerFloat {
            bottom: 0rem;
          }
        }
      `}</style>
    </>
  );
}

export default Slogan