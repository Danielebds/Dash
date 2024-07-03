import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  const [image, setImage] = useState('assets/engenheiro.png'); // Caminho padrão para a imagem

  useEffect(() => {
    // Carregar a imagem salva do local storage ao inicializar
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4 flex flex-col items-center bg-teal-600">
        <h1 className="text-xl font-bold mb-2"></h1>
        {image && <img src={image} alt="" className="w-24 h-24 rounded-full mb-2 border-2 border-white" />}
        <div className="flex space-x-2 mt-2">
          
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">José</h2>
          <p className="text-sm">Web Developer/Designer</p>
        </div>
      </div>
      <nav className="flex flex-col flex-grow p-4">
        
        <Link to="#" className="p-2 bg-teal-700 rounded hover:bg-teal-800">Dashboard</Link>
        <Link to="#" className="p-2 hover:bg-gray-700 rounded">Mapa de Calor</Link>
        <Link to="#" className="p-2 hover:bg-gray-700 rounded">Estatística</Link>
        <Link to="#" className="p-2 hover:bg-gray-700 rounded">Relatório</Link>
        <Link to="#" className="p-2 hover:bg-gray-700 rounded">Histórico</Link>
        <Link to="#" className="p-2 hover:bg-gray-700 rounded">Faq</Link>
        <Link to="#" className="p-2 hover:bg-gray-700 rounded">Contato</Link>
        <Link to="#" className="p-2 hover:bg-gray-700 rounded">Excluir</Link>
      </nav>
      <Link to="/" className="p-4 bg-red-700 hover:bg-red-600">Sair</Link>
    </div>
  );
};

export default Sidebar;
