import { Container } from "react-bootstrap";
import Carousel3 from "../components/Carousel3";
import "../css/Confirmacion.css";

export default function Confirmacion() {
  return (
    <section className="confirmacion-section">
      <Container className="confirmacion-container text-center">
        <h1 className="titulo">Tu asistencia es muy importante</h1>
        <h3 className="amor">
          ✨
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}>
            <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
          </svg>
          🌿
        </h3>
        <p className="asistencia-text">
          ✨Un día, dos almas… un mismo "sí" El amor nos encontró, y juntos decidimos caminar hacia siempre.
          Sebastián & Taty hemos soñado con este momento, y nada nos haría más felices que compartirlo contigo.
          <br /><br />
          🌿 Confirma tu asistencia y sé parte de este capítulo tan especial donde el amor florece, las promesas se sellan y los corazones laten al mismo ritmo.
        </p>
        <a className="confirma-btn" href="https://milistadenovios.cl/invitados/27278" target="blank">Confirma tu asistencia aqui</a>
        <div className="carrusel-wrapper">
          <div className="carrusel-redondeado">
            <Carousel3 />
          </div>
        </div>
      </Container>
    </section>
  );
}
// ...existing code...