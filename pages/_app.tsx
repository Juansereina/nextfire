import "../styles/globals.css";
import Navbar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: null, username: "jeff" }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}
