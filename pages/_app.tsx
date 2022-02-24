import "../styles/globals.css";
import "../styles/theme.css";

import { CartProvider } from "../components/context/shoppingCartContext";
import type { AppProps } from "next/app";
import HolaContext from "../components/context/staticCartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HolaContext.Provider value={{ contadorBadget: 0 }}>
      <Component {...pageProps} />
      <CartProvider />
    </HolaContext.Provider>
  );
}

export default MyApp;
