import "../styles/globals.css";
import "../styles/theme.css";
import Cart from "../components/context/staticCartContext";
import { CartProvider } from "../components/context/shoppingCartContext";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
