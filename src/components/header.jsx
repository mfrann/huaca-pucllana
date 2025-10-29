import "@/styles/header.css";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toGo = () => {
    const section = document.getElementById("name");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-main-container">
      <div className="overlay"></div>
      <header className={`h-container ${scrolled ? "scrolled" : ""}`}>
        <img src="/public/assets/logo.png" alt="" />
        <nav className={`h-navbar ${open ? "active" : ""}`}>
          <a href="#name" onClick={() => setOpen(false)}>
            NOSOTROS
          </a>

          <a
            href="/public/assets/docs/carta.pdf"
            target="_blank"
            onClick={() => setOpen(false)}
          >
            LA CARTA
          </a>

          <a href="#gallery" onClick={() => setOpen(false)}>
            GALERIA
          </a>

          <a href="#reserva" onClick={() => setOpen(false)}>
            RESERVAS
          </a>

          <a href="#contacto" onClick={() => setOpen(false)}>
            CONTACTO
          </a>
        </nav>

        <button
          className={`menu-toggle ${open ? "open" : "close"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>
      <button className="h-button" onClick={toGo} id="name">
        <FaAngleDown />
      </button>
    </section>
  );
}
