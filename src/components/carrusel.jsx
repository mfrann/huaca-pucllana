import React, { useState } from "react";
import "../styles/carrusel.css";

const images = [
  "/public/assets/dishes/3.avif",
  "/public/assets/dishes/4.avif",
  "/public/assets/dishes/5.avif",
  "/public/assets/dishes/6.avif",
  "/public/assets/dishes/7.avif",
  "/public/assets/dishes/8.avif",
  "/public/assets/dishes/9.avif",
  "/public/assets/dishes/11.avif",
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="c-container">
      <div className="c-wrapper">
        <div
          className="c-slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="c-slide">
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <button className="c-btn prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="c-btn next" onClick={nextSlide}>
        &#8250;
      </button>

      {/* Indicadores (puntos) */}
      <div className="c-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
