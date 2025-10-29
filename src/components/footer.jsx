import "@/styles/footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="f-container" id="contacto">
      <section>
        <section className="f-container-info">
          <div className="f-info 1">
            <h1>Dirección</h1>
            <p>
              General Borgoño Cdra 8, <br /> Huaca Pucllana, Miraflores
            </p>
          </div>
          <div className="f-info 2">
            <h1>Horario</h1>
            <p>
              Lunes a Sábado 12:00pm - 10:00pm <br /> Domingos 12:00pm - 8:00pm{" "}
            </p>
          </div>
          <div className="f-info 3">
            <h1>Contactanos</h1>
            <p>
              (01) 445-4042 / 994-005-266 <br /> reservas@resthuacapucllana.com
            </p>
          </div>
        </section>
        <section className="f-container-ruc">
          <p>Razón social: Restaurant Huaca Pucllana SAC // RUC: 20500732891</p>
        </section>
        <section className="f-container-social">
          <p>2025 Restaurante Huaca Pucllana | Web no oficial</p>
          <div className="f-social-media">
            <a
              href="https://www.facebook.com/restauranthuacapucllana/"
              target="_blank"
            >
              <FaFacebook size={15} />
            </a>
            <a
              href="https://www.instagram.com/restauranthuacapucllana/"
              target="_blank"
            >
              <FaInstagram size={15} />
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
}
