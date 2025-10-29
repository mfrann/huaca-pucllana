import "/styles/reservar.css";
import { FaCalendarAlt, FaUserAlt, FaClock } from "react-icons/fa";
import { useScrollAnimation } from "./animation";

export function Reserva() {
  const { ref } = useScrollAnimation();

  const goLink = () => {
    window.open(
      "https://lahuacapucllana.mesa247.pe/reservas/la_huaca_pucllana#/la_huaca_pucllana"
    );
  };

  return (
    <section className="r-container" id="reserva">
      <div id="r-container-2" ref={ref} className="animate-on-scroll delay-1">
        <h1>RESERVAR</h1>
        <p>
          Puedes agendar con anticipacion, para mayor comodidad sin preocuparte
          luego
        </p>
      </div>

      <div ref={ref} className="r-container-p animate-on-scroll delay-2">
        <p>
          <span className="r-span-icon">
            <FaClock size={30} />
          </span>
          Horario de atencion
        </p>
        <p>
          <span className="r-span-icon">
            <FaUserAlt size={30} />
          </span>
          Numero de personas
        </p>
        <p>
          <span className="r-span-icon">
            <FaCalendarAlt size={30} />
          </span>
          Fecha y Zona
        </p>
      </div>
      <button onClick={goLink}>Reservar Aqui</button>
    </section>
  );
}
