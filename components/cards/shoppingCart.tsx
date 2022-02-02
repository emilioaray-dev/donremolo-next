import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

import { useRouter } from "next/router";


const ShoppingCart: FC<{ number: number; }> = ({ number }) => {

  // console.log(Lista);
  return (
    <>
      <footer>
        <div className="shopImgCart">
          <div className="shopImgCart__grid">
            <Link href="">
              <a href="">
                <picture className="shopImgCart__picture">
                  <Image className="shopImgCart__img" src="/assets/img/icons/shoppingCart.svg" alt="" width={30} height={30} />
                </picture>
                <div className="shoppingImgCart__badgeGrid">
                  <span className="shopImgCart__badgeGrid--number">{number}</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .shopImgCart {
          position: fixed;
          bottom: 0;
          width: 100vw;
          height: 4rem;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          background: rgba(255, 255, 255, 0.5);
        }

        .shopImgCart__grid {
          display: grid;
          height: 100%;
          align-items: center;
          justify-items: center;
        }

        .shopImgCart__picture {
          background: var(--brandColorGrey1);
          padding: 10px 11px 10px 10px;
          border-radius: 50%;
        }

        .shopImgCart__picture.activo {
          background: var(--brandColorRed);
        }

        Image .shopImgCart__img {
          width: 1.8rem;
          transform: translateX(-3px);
        }

        .shoppingImgCart__badgeGrid {
          position: absolute;
          top: 0;
          background: #f1f1f1;
          display: flex;
          justify-content: center;
          border-radius: 50%;
          transform: translate(38px, 4px);
          color: var(--brandColorRed);
          font-size: small;
        }

        .shopImgCart__badgeGrid--number {
          display: flex;
          justify-content: center;
          width: 1rem;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};
export default ShoppingCart;
