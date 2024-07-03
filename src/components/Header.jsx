import React from 'react';
import { FaSave, FaCloudUploadAlt, FaPrint, FaShareAlt, FaAdjust } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="bg-black border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="assets/simbolo.png" className="ml-3 h-10 sm:h-20" alt="Cath Logo" />
          </a>
        </div>
        <div className="flex flex-col text-left text-red-500 font-medium space-y-1">
          <span>CLIENTE: <strong className='font-medium text-white'>PREFEITURA DE OLINDA</strong></span>
          <span>PROGRAMA: <strong className='font-medium text-white'>REDE VIVA</strong></span>
          <span>RESPONSÁVEL: <strong className='font-medium text-white'>CARLOS AUGUSTO</strong></span>
          <span>QUANTITATIVO: <strong className='font-medium text-white'>600</strong></span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
            <FaSave className="w-6 h-6" />
          </button>
          <button className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
            <FaCloudUploadAlt className="w-6 h-6" />
          </button>
          <button className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
            <FaPrint className="w-6 h-6" />
          </button>
          <button className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
            <FaShareAlt className="w-6 h-6" />
          </button>
          <button className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
            <FaAdjust className="w-6 h-6" />
          </button>
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
