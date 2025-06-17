import "../css/Home.css";
import Carousel1 from "../components/Carousel1";
import Carousel2 from "../components/Carousel2";
//importar imagen de fondo
import taty from "../assets/kathyseba.png"
import itinerario from "../assets/itinerario.png";

export default function Home() {
  return (
    <section className="container mt-5">
      <div>
        <h1 className="titulo mb-4">
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
        <h3 className="text-center titulo-secundario">
          ¡Estamos felices de compartir este día tan especial con ustedes!
        </h3>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-md-7">
          <p className="texto-home">
            Aquí encontrarás toda la información sobre nuestra boda, desde la fecha y el lugar hasta los detalles del evento. ¡Esperamos verte allí para celebrar juntos!
            <span style={{ verticalAlign: "middle" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
              </svg>
            </span>
          </p>
        </div>
        <div className="col-md-5 d-flex justify-content-end">
          <div style={{ width: "300px" }} className="carrusel-redondeado">
            <Carousel1 /> <br />
          </div>
        </div>
      </div>
      <div className="itinerario text-center mt-5">
        <img src={itinerario} alt="fondo" />
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-md-5 d-flex justify-content-start">
          <div style={{ width: "300px" }} className="carrusel-redondeado">
            <Carousel2 /><br />
          </div>
        </div>
        <div className="col-md-7">
          <p className="texto-home">
            El lugar de nuestra boda es muy importante para nosotros, y queremos que todos nuestros seres queridos estén allí para compartir este momento tan especial.
            Pincha en el corazon para ver la ubicación del evento. 
            <span style={{ verticalAlign: "middle" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#545646" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21s-6.7-5.4-9.3-8.1C.7 10.2.7 7.1 3 5.3c2.1-1.6 5.1-1.1 6.7 1 .2.3.5.3.7 0 1.6-2.1 4.6-2.6 6.7-1 2.3 1.8 2.3 4.9.3 7.6C18.7 15.6 12 21 12 21z"/>
              </svg>
            </span>
          </p>
        </div>
        <div>
          <h3 className="text-end titulo-secundario">Centro de eventos Montepiedra.</h3>
          <h4 className="text-end titulo-secundario"> Cam. Al Volcán 13026, El Manzano, San José de Maipo, Región Metropolitana. </h4>
          <a href="https://maps.app.goo.gl/6U8xzksHQVKRqYJs6" target="_blank" rel="noopener noreferrer">
          <h4 className="subrayado text-end " >Para mas informacion pincha aqui</h4>
          </a>
        </div>
      </div>
      <div className="taty text-center mt-5">
        <img src={taty} alt="fondo" />
      </div>
    </section>
  );
}