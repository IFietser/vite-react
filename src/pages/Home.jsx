import "../css/Home.css";
import Carousel1 from "../components/Carousel1";
import Carousel2 from "../components/Carousel2";

export default function Home() {
  return (
    <section className="container mt-5">
      <div>
        <h1 className="titulo mb-4">Bienvenidos a nuestro matrimonio</h1>
        <h3 className="text-center">¡Estamos felices de compartir este día tan especial con ustedes!</h3>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-md-7">
          <p style={{ fontSize: "1.2rem" }}>
            Aquí encontrarás toda la información sobre nuestra boda, desde la fecha y el lugar hasta los detalles del evento. ¡Esperamos verte allí para celebrar juntos!
          </p>
        </div>
        <div className="col-md-5 d-flex justify-content-end">
          <div style={{ width: "300px" }} className="carrusel-redondeado">
           <Carousel1 />
          </div>
        </div>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="carrusel col-md-5 d-flex justify-content-start">
          <div style={{ width: "300px" }} className="carrusel-redondeado">
            <Carousel2 />
          </div>
        </div>
        <div className="col-md-7">
          <p style={{ fontSize: "1.2rem" }}>
            Aquí encontrarás toda la información sobre nuestra boda, desde la fecha y el lugar hasta los detalles del evento. ¡Esperamos verte allí para celebrar juntos!
          </p>
        </div>
      </div>
    </section>
  )
}