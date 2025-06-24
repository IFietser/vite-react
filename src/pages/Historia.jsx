import "../css/Historia.css";
import { useEffect } from "react";

export default function Historia() {

useEffect(() => {
  const elements = document.querySelectorAll('.slide-in-top, .slide-in-bottom');
  const observer = new window.IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-visible');
        } else {
          entry.target.classList.remove('slide-in-visible');
        }
      });
    },
    { threshold: 0.2 }
  );
  elements.forEach(el => observer.observe(el));
  return () => observer.disconnect();
}, []);

  return (
    <section className="confirmacion-section">
      <div className="confirmacion-container text-center">
        <h1 className="titulo mb-4">
          Compartimos contigo nuestra historia
        </h1>
        <h3 className="amor text-center slide-in-bottom">Un amor Inquebrantable</h3>
        <p className="asistencia-text historia slide-in-top">
          En la ciudad de Santiago, Sebastián y Katherine se reencontraron luego de ir en el
          mismo colegio en básica. ✨ Ella con un amor por mejorar la salud de las personas y él un
          apasionado del deporte. 🌿 Desde el primer encuentro ambos sintieron una conexión
          especial, como si sus almas se conocieran desde tiempos inmemorables.
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}>
            <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
          </svg>
          <br /><br />
          Sus citas eran largas conversaciones, risas y acogedores cafés. 🌿 Con cada día que
          pasaba, su amor crecía más fuerte. ✨ Ambos se impulsaban a seguir sus pasiones,
          apoyándose en los momentos difíciles y celebrando triunfos juntos. 🌿
          <br /><br />
          Tres años después de haberse conocido, una tragedia golpeó sus vidas.
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}>
            <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
          </svg>
          Seba sufrió una lesión que lo dejó paralizado de la cintura para abajo. La noticia fue devastadora. 🌿
          Durante los días en el hospital, Seba se sumió en desesperación temiendo ser una
          carga para Kathy. ✨ Sin embargo, ella nunca se fue de su lado.
          <br /><br />
          Kathy le aseguró que su amor era inquebrantable y que aunque la vida había
          cambiado, seguirían adelante juntos. 🌿 Con paciencia y dedicación, lo acompañó en su
          proceso de rehabilitación, aprendiendo junto a él las nuevas maneras de vivir.
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}>
            <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
          </svg>
          <br /><br />
          La silla de ruedas no fue un obstáculo para su amor, sino un reto que enfrentaron juntos con
          valentía. 🌿 Con el tiempo, Seba recuperó su confianza.
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}>
            <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
          </svg>
          Juntos comenzaron a adaptar su hogar y sus actividades. 🌿 Las escapadas a la naturaleza se convirtieron en aventuras accesibles,
          pero ambos continuaron con sus pasiones. ✨
          <br /><br />
          A medida que el tiempo pasaba, su amor solo se fortaleció. 🌿 Aprendieron que, aunque la
          vida puede cambiar en un instante, lo que realmente importa es enfrentar los
          desafíos con amor y unidad.
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}>
            <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
          </svg>
          <br /><br />
          Para ellos, la silla de ruedas no fue el fin de una historia
          de amor, sino un nuevo capítulo que escribir juntos.
        </p>
      </div>
    </section>
  );
}