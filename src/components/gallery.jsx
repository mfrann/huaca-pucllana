import "../styles/gallery.css";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "./carrusel";
import { useScrollAnimation } from "./animation";

export function Gallery() {
  const { ref } = useScrollAnimation();

  const goLink = () => {
    window.open("../public/assets/docs/carta.pdf");
  };
  return (
    <section id="galeria">
      <h1>GALERIA</h1>
      <p>*PLATOS</p>
      <div className="g-container">
        <div className="carrusel">
          <Carousel />
        </div>

        <div ref={ref} className="g-container-img animate-on-scroll delay-1">
          <img
            className="g-i s-1x2"
            src="../public/assets/dishes/3.avif"
            alt="plato 3"
          />
          <img
            className="g-i s-1x2"
            src="../public/assets/dishes/4.avif"
            alt="plato 4"
          />
          <img
            className="g-i s-1x2"
            src="../public/assets/dishes/5.avif"
            alt="plato 5"
          />
          <img
            className="g-i s-1x2"
            src="../public/assets/dishes/6.avif"
            alt="plato 6"
          />
          <img
            className="g-i s-1x2"
            src="../public/assets/dishes/7.avif"
            alt="plato 7"
          />
          <img
            className="g-i s-1x2"
            src="../public/assets/dishes/8.avif"
            alt="plato 8"
          />
          <img
            className="g-i s-1x2"
            src="../public/assets/dishes/9.avif"
            alt="plato 9"
          />
          <img
            className="g-i s-1x2"
            src="../public/assets/dishes/11.avif"
            alt="plato 11"
          />
        </div>
        <div className="g-button">
          <button onClick={goLink}>
            Ver Menu <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
