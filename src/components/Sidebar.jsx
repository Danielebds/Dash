import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaClock, FaMap, FaUser } from "react-icons/fa";
import {
  FaArrowRightFromBracket,
  FaMessage,
  FaNoteSticky,
  FaPhoneVolume,
  FaTrash,
} from "react-icons/fa6";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-30 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out min-h-screen bg-gray-800 text-white p-4 w-60`}>
      <button className="md:hidden mb-4 text-white" onClick={toggleSidebar}>
        ✕
      </button>
      <nav className="flex flex-col justify-between h-full">
        <div className="space-y-4">
          <a href="#" className="flex items-center h-12 px-4 rounded-lg text-gray-200 hover:bg-gray-700">
            <FaUser className="mr-3" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center h-12 px-4 rounded-lg text-gray-200 hover:bg-gray-700">
            <FaMap className="mr-3" />
            <span>Mapa de Calor</span>
          </a>
          <a href="#" className="flex items-center h-12 px-4 rounded-lg text-gray-200 hover:bg-gray-700">
            <FaChartLine className="mr-3" />
            <span>Estatística</span>
          </a>
          <a href="#" className="flex items-center h-12 px-4 rounded-lg text-gray-200 hover:bg-gray-700">
            <FaNoteSticky className="mr-3" />
            <span>Relatório</span>
          </a>
          <a href="#" className="flex items-center h-12 px-4 rounded-lg text-gray-200 hover:bg-gray-700">
            <FaClock className="mr-3" />
            <span>Histórico</span>
          </a>
          <a href="#" className="flex items-center h-12 px-4 rounded-lg text-gray-200 hover:bg-gray-700">
            <FaMessage className="mr-3" />
            <span>Faq</span>
          </a>
          <a href="#" className="flex items-center h-12 px-4 rounded-lg text-gray-200 hover:bg-gray-700">
            <FaPhoneVolume className="mr-3" />
            <span>Contato</span>
          </a>
          <a href="#" className="flex items-center h-12 px-4 rounded-lg text-gray-200 hover:bg-gray-700">
            <FaTrash className="mr-3" />
            <span>Excluir</span>
          </a>
        </div>
        <div className="mt-4">
          <a href="#" className="flex items-center h-12 px-4 rounded-lg text-gray-200 hover:bg-gray-700">
            <FaArrowRightFromBracket className="mr-3" />
            <Link to="/">SAIR</Link> 
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
