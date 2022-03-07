import Head from "next/head";
import Header from "../components/header";
import CartPedido2 from "../components/cards/CartPedido2";
import CartPedidoFooter from "../components/cards/CartPedidoFooter";

export default function Pedido() {
  return (
    <>
      <Head>
        <title>Don Rémolo | Pedido</title>
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link as="font" href="/assets/fonts/OpenSans-VariableFont.ttf"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        hideBackbuttom={""} //'hide' Oculta el bottom de back
        hideTitle={""} // 'hide' Oculta el titulo o --title--
        title={"Tu Pedido"} // Texto a mostrar
        hideIconNav={"none"} //'none' Oculta Los Botonos del Nav
        color=""
      />
      <main>
        <CartPedido2 units={1} product={""} price={" "} />
      </main>
      <CartPedidoFooter />
    </>
  );
}
