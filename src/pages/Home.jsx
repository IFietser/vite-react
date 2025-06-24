import {useEffect} from "react"
import "../css/Home.css";
import Carousel1 from "../components/Carousel1";
import Carousel2 from "../components/Carousel2";
import taty from "../assets/kathyseba.png";
import Cuenta from "../assets/Cuenta.png";
import itinerario from "../assets/itinerario.png";
import dresscode from "../assets/Dress.png";


export default function Home() {

useEffect(() => {
  const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-top, .slide-in-bottom');
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
        <h1 className="titulo mb-4 t">
          <span style={{ verticalAlign: "middle" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
            </svg>
          </span>
          Bienvenidos a nuestro matrimonio
          <span style={{ verticalAlign: "middle" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
            </svg>
          </span>
        </h1>
        <h3 className="amor text-center slide-in-left">
          ¡Estamos felices de compartir este día tan especial con ustedes!
        </h3>
        <div className="home-bloque-flex">
          <div className="home-bloque-texto ">
            <p className="asistencia-text slide-in-top">
              Aquí encontrarás toda la información sobre nuestra boda, desde la fecha y el lugar hasta los detalles del evento. ¡Esperamos verte allí para celebrar juntos!
              <span style={{ verticalAlign: "middle" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
                </svg>
              </span>
            </p>
          </div>
          <div className="home-bloque-carrusel slide-in-right ">
            <div className="carrusel-redondeado" style={{ width: "300px" }}>
              <Carousel1 />
            </div>
          </div>
        </div>
        <div className="dresscode slide-in-bottom">
          <img src={dresscode} alt="" />
        </div>
        <div className="itinerario slide-in-top">
          <img src={itinerario} alt="itinerario" />
        </div>
        <div className="home-bloque-flex home-bloque-flex-reverse">
          <div className="home-bloque-carrusel slide-in-left">
            <div className="carrusel-redondeado" style={{ width: "300px" }}>
              <Carousel2 />
            </div>
          </div>
          <div className="home-bloque-texto">
            <p className="asistencia-text slide-in-bottom">
              El lugar de nuestra boda es muy importante para nosotros, y queremos que todos nuestros seres queridos estén allí para compartir este momento tan especial.
              <span style={{ verticalAlign: "middle" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
                </svg>
              </span>
            </p>
            <h3 className="amor text-center">Centro de eventos Montepiedra.</h3>
            <h4 className="text-center titulo-secundario">Cam. Al Volcán 13026, El Manzano, San José de Maipo, Región Metropolitana.</h4>
            <a className="subrayado" href="https://maps.app.goo.gl/6U8xzksHQVKRqYJs6" target="_blank" rel="noopener noreferrer">
              <h4 className="subrayado text-center">Para más información pincha aquí</h4>
            </a>
          </div>
        </div>
        <div className="taty text-center mt-5">
          <img  className = "slide-in-left"src={taty} alt="taty y seba" style={{ maxWidth: "100%", borderRadius: "16px" }} />
          <h3 className="amor text-center slide-in-right">
         💖 Queridos amigos y familia 💖
        </h3>
          <p className="asistencia-text">Con mucha alegría queremos contarles que, gracias a Dios, ya tenemos nuestro hogar armado con todo lo esencial, desde la lavadora hasta los detalles más pequeños que hacen acogedor nuestro nido de amor.
            </p><br />
            <p className="asistencia-text slide-in-top">Por eso, en vez de regalos materiales, si desean acompañarnos con un detalle, les dejaremos un link, donde podrán hacernos un regalo especial en forma de aporte. Ese gesto será parte de nuestros nuevos sueños, de los viajes por venir y de los recuerdos que construiremos juntos como familia.
            </p><br />
             <a className="confirma-btn slide-in-top" href="https://milistadenovios.cl/enviar-regalo?id=27278" target="blank">Link de regalos</a>
            <p className="asistencia-text slide-in-right">Si se les complica mucho hacerlo por la página, también pueden hacernos llegar su cariño a través de una transferencia bancaria
            </p><br />
          <img  className = "slide-in-bottom"src={Cuenta} alt="" style={{ maxWidth: "100%", borderRadius: "16px" }} />
        </div>
      </div>
    </section>
  );
}