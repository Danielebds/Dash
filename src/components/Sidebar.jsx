import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";

const Sidebar = () => {
  const [image, setImage] = useState('assets/engenheiro.png');

  useEffect(() => {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  return (
    <div className="relative bg-slate-50 dark:bg-blue-950 text-white w-64 min-h-screen flex flex-col">
      <svg className="absolute inset-0 w-full h-full text-gray-800" preserveAspectRatio="none" viewBox="0 0 309 800" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: '-1' }}>
        <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
      </svg>
      <div className="p-4 flex flex-col dark:text-white bg-slate-100 text-black items-center dark:bg-blue-900 dark:bg-gray-800">
        <h1 className="text-xl font-bold mb-2"></h1>
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
        <div className="flex space-x-2 mt-2"></div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">José</h2>
          <p className="text-sm">Web Developer/Designer</p>
        </div>
      </div>
      <nav className="flex flex-col dark:text-white text-black  Dark:text-white flex-grow p-4">
        <Link to="#" className="p-2 rounded bg-gradient-to-r from-red-600 to-red-700 hover:from-red-400 hover:to-red-500">Dashboard</Link>
        <Link to="#" className="p-2 bg-gradient-to-r to-red-700 hover:from-red-400 hover:to-red-500 rounded">Mapa de Calor</Link>
        <Link to="#" className="p-2 bg-gradient-to-r hover:from-red-400 hover:to-red-500 rounded">Estatística</Link>
        <Link to="#" className="p-2 h bg-gradient-to-r hover:from-red-400 hover:to-red-500 rounded">Relatório</Link>
        <Link to="#" className="p-2 h bg-gradient-to-r hover:from-red-400 hover:to-red-500 rounded">Histórico</Link>
        <Link to="#" className="p-2 bg-gradient-to-r hover:from-red-400 hover:to-red-500 rounded">Faq</Link>
        <Link to="#" className="p-2 bg-gradient-to-r hover:from-red-400 hover:to-red-500 rounded">Contato</Link>
        <Link to="#" className="p-2 bg-gradient-to-r hover:from-red-400 hover:to-red-500 rounded">Excluir</Link>
      </nav>
      <Link to="/" className="p-4 bg-slate-100 hover:bg-slate-200 dark:text-white text-black dark:bg-blue-900 dark:hover:bg-blue-800">Sair</Link>
    </div>
  );
};

export default Sidebar;
