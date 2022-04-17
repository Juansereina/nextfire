import "../styles/globals.css";
import Navbar from "../components/NavBar";
import { Toaster } from "react-hot-toast";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
