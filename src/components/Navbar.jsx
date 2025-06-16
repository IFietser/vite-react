import { Link, NavLink } from 'react-router-dom';
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-">
      <div className="container">
        <Link className="navbar-brand" to="/">Nuestro matrimonio</Link>
      <h4 className='nombres'>"Sebastian & Katherine"</h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => "nav-link" + (isActive ? " active" : "")} end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/galeria" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
                Galería
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/confirmacion" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
                Confirmación
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
