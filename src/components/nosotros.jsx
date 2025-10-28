import myImg2 from "/public/assets/huaca.jpg";
import myImg from "/public/assets/dishes/7.avif";
import { FaArrowRight } from "react-icons/fa";
import { useScrollAnimation } from "./animation";

import "../styles/nosotros.css";

export function Nosotros() {
  const { ref } = useScrollAnimation();

  return (
    <section id="nosotros">
      <h1>HUACA PUCLLANA</h1>
      <p>RESTAURANTE & BAR</p>

      <section className="n-container">
        <section ref={ref} className="n-block1 animate-on-scroll delay-1">
          <div className="n-info">
            <h2>Nosotros</h2>
            <p>
              La Huaca Pucllana mantiene con justificado orgullo una filosofía
              culinaria cuyo concepto fundamental radica en utilizar como base
              los sabores del Perú, interpretando de acuerdo a las técnicas
              clásicas de cocina, así como los estilos contemporáneos y a las
              exigencias de los paladares más exquisitos.
            </p>
          </div>
          <section className="n-separador"></section>
          <div className="n-image">
            <img src={myImg} alt="img-huaca-pucllana" />
          </div>
        </section>

        <section ref={ref} className="n-block1 animate-on-scroll delay-2">
          <div className="n-image">
            <img src={myImg2} alt="img-huaca-pucllana" />
          </div>
          <section className="n-separador"></section>
          <div className="n-info">
            <h2>Huaca Pucllana</h2>
            <p>
              En el siglo V de nuestra era, los habitantes del Valle de Lima
              iniciaron la construcción de la Huaca Puccllana. Pucllana fue,
              pues, un importante centro ceremonial y administrativo. Su
              grandeza esta reflejada en la configuración de una arquitectura
              monumental, hecha en adobe pequeño y forjada sobre la base de
              continuos adosamientos y y remodelaciones, realizados durante los
              tres siglos que tuvo vigencia.
            </p>
          </div>
        </section>

        <section id="gallery"></section>
      </section>
    </section>
  );
}
