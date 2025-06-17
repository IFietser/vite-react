import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Confirmacion from './pages/Confirmacion';
import  "./css/App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
