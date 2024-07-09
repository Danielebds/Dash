import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";

const Sidebar = () => {
  useEffect(() => {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  return (
    <div className="relative bg-slate-100 text-black  dark:bg-[#142630] dark:text-white w-64 min-h-screen flex flex-col">
      <svg className="absolute inset-0 w-full h-full text-gray-800 dark:text-gray-700" preserveAspectRatio="none" viewBox="0 0 309 800" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: '-1' }}>
        <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
      </svg>
      <div className="p-4 flex flex-col items-center bg-slate-200 dark:bg-[#142623]">
        <h1 className="text-xl font-bold mb-2"></h1>
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
        <div className="flex space-x-2 mt-2"></div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">José</h2>
          <p className="text-sm">Web Developer/Designer</p>
        </div>
      </div>
      <nav className="flex flex-col flex-grow p-4">
        <NavLink to="/dashboard" className="p-2 rounded hover:bg-red-600" activeClassName="bg-red-700">Dashboard</NavLink>
        <NavLink to="/heatmap" className="p-2 rounded hover:bg-red-600" activeClassName="bg-red-700">Mapa de Calor</NavLink>
        <NavLink to="#" className="p-2 rounded hover:bg-red-600" activeClassName="bg-red-700">Estatística</NavLink>
        <NavLink to="#" className="p-2 rounded hover:bg-red-600" activeClassName="bg-red-700">Relatório</NavLink>
        <NavLink to="#" className="p-2 rounded hover:bg-red-600" activeClassName="bg-red-700">Histórico</NavLink>
        <NavLink to="/faq" className="p-2 rounded hover:bg-red-600" activeClassName="bg-red-700">Faq</NavLink>
        <NavLink to="#" className="p-2 rounded hover:bg-red-600" activeClassName="bg-red-700">Contato</NavLink>
        <NavLink to="#" className="p-2 rounded hover:bg-red-600" activeClassName="bg-red-700">Excluir</NavLink>
      </nav>
      <NavLink to="/" className="p-4 bg-slate-200 dark:bg-[#142623] hover:bg-slate-100 dark:hover:bg-[#142630] ">Sair</NavLink>
    </div>
  );
};

export default Sidebar;
