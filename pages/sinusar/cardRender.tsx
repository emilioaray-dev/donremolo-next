import { FC } from "react";
import CardComponent from "./cardComponent";

function CardRender({ lista }) {
  return (
  <>
  {lista.map((lista) => {
    return (
        <div key={lista.titulo}>
        <CardComponent
          key=""
            href="#"
            imagen="/assets/img/pizzas/mozzarella.png"
            altImagen="Pizza Mozzarella"
            titulo="Mozzarella"
            descripcion="Mozzarella|Orégano|Aceitunas |Aceite de oliva"
            precio="1134"
          />
         </div>
        
      )})}
  </>
)
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/dataPizza");
  const lista = await res.json();
  console.log(lista);

  return {
    props: {
      lista,
    },
    revalidate: 10, // In seconds
  };
}




export default CardRender;
