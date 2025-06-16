import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Confirmacion from './pages/Confirmacion';
import  "./css/App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
