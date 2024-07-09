import React from 'react';
import { FaSave, FaCloudUploadAlt, FaPrint, FaShareAlt } from 'react-icons/fa';
import DarkMode from '../components/Darkmode'; // Importa o componente DarkMode

const Header = () => {
  return (
    <nav className="bg-slate-100 border-red-700 px-4 lg:px-6 py-4 dark:bg-[#142630]">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="assets/simbolo.png" className="ml-3 h-10 sm:h-20" alt="Cath Logo" />
          </a>
        </div>
        <div className="flex flex-col text-left text-red-500 font-medium space-y-1">
          <span>CLIENTE: <strong className='dark:text-white text-black'>PREFEITURA DE OLINDA</strong></span>
          <span>PROGRAMA: <strong className='dark:text-white text-black'>REDE VIVA</strong></span>
          <span>RESPONSÁVEL: <strong className='dark:text-white text-black'>CARLOS AUGUSTO</strong></span>
          <span>QUANTITATIVO: <strong className='dark:text-white text-black'>600</strong></span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
            <FaSave className="w-6 h-6" />
          </button>
          <button className="text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
            <FaCloudUploadAlt className="w-6 h-6" />
          </button>
          <button className="text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
            <FaPrint className="w-6 h-6" />
          </button>
          <button className="text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
            <FaShareAlt className="w-6 h-6" />
          </button>
          <DarkMode /> {/* Adiciona o componente DarkMode */}
        </div>
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="assets/prefeitura.png" className="ml-3 h-10 sm:h-16" alt="Prefeitura de Olinda Logo" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
