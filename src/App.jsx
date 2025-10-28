import "./App.css";
import { Header } from "./components/header";
import { Nosotros } from "./components/nosotros";
import { Gallery } from "./components/gallery";
import { Reserva } from "./components/reservar";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Nosotros />
      <Gallery />
      <Reserva />
      <Footer />
    </>
  );
}

export default App;
