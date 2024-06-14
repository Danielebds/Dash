import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import Dashboard from "../pages/Dashboard/dashboard";
import MapaCalor from "../pages/Mapa/MapaCalor"; // Corrigi o caminho aqui

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mapa" element={<MapaCalor />} /> {/* Adicionei a rota para Mapa */}
    </Routes>
  );
};

export default RoutesApp;
