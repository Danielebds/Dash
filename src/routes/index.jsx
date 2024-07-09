import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import Dashboard from "../pages/Dashboard/dashboard";
import HeatMapPages from "../pages/HeatMapPages/HeatMapPages";
import FaqPage from "../pages/Faq/FaqPage";
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/heatmap" element={<HeatMapPages />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  );
};

export default RoutesApp;
