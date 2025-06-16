import Carousel from 'react-bootstrap/Carousel';
import ejemplo from "../assets/ejemplo.jpg";

function Carousel2() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ejemplo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>First slide label</h3>
          <p style={{ color: 'black' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ejemplo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Second slide label</h3>
          <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ejemplo}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{color: 'black' }}>Third slide label</h3>
          <p style={{ color: 'black' }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel2;