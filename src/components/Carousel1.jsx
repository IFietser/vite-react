// Importamos los componentes necesarios de React y Bootstrap
import Carousel from 'react-bootstrap/Carousel';
//Importamos las fotos
import foto1 from "../assets/11.jpg";
import foto2 from "../assets/5.jpg";
import foto3 from "../assets/14.jpg";
function Carousel1() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;