import React from "react";
import Sidebar from "../../components/Sidebar.jsx";
import Header from "../../components/Header.jsx";
import Charts from "../../components/Charts.jsx";
import BarChart from "../../components/Barchart.jsx";
import HeatMap from "../../components/HeatMap.jsx";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="p-4 grid grid-cols-1 xl:grid-cols-4 gap-4">
          {/* Box de Construção Civil */}
          <div className="bg-gradient-to-r from-green-500 to-green-300 shadow-slate-300 dark:shadow-slate-800 shadow-xl p-4 rounded-lg text-black flex flex-col items-center">
            <img src="/assets/engenheiro.png" alt="Construção Civil" className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-bold">CONSTRUÇÃO CIVIL</h2>
            <p className="text-2xl font-bold">QTD: 200</p>
          </div>
          {/* Box de Mecânica */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 shadow-slate-300 dark:shadow-slate-800 shadow-xl p-4 rounded-lg text-black flex flex-col items-center">
            <img src="/assets/mecanico.png" alt="Mecânica" className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-bold">MECÂNICA</h2>
            <p className="text-2xl font-bold">QTD: 150</p>
          </div>
          {/* Box de Comércio */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-300 shadow-slate-300 dark:shadow-slate-800 shadow-xl p-4 rounded-lg text-black flex flex-col items-center">
            <img src="/assets/comercio.png" alt="Comércio" className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-bold">COMÉRCIO</h2>
            <p className="text-2xl font-bold">QTD: 150</p>
          </div>
          {/* Box de Aulas */}
          <div className="bg-gradient-to-r from-red-500 to-red-400 shadow-slate-300 dark:shadow-slate-800 shadow-xl p-4 rounded-lg text-black flex flex-col items-center">
            <img src="/assets/aulas.png" alt="Aulas" className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-bold">AULAS</h2>
            <p className="text-2xl font-bold">QTD: 100</p>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Box de Demanda por Habilidade - Sub Áreas */}
          <div className="bg-slate-200  dark:bg-blue-950 p-4 shadow-slate-300 dark:shadow-slate-800 shadow-xl rounded-lg col-span-1 lg:col-span-2">
            <h2 className="text-lg  text-black dark:text-white font-bold mb-4">DEMANDA POR HABILIDADE - SUB ÁREAS</h2>
            <div className="w-full h-64">
              {/* Incluindo o componente Charts dentro do box */}
              <Charts />
            </div>
          </div>
          {/* Box de Mapa de Calor */}
          <div className="bg-slate-200  dark:bg-blue-950 p-4 shadow-slate-300 dark:shadow-slate-800 shadow-xl p-4 rounded-lg lg:row-span-2 lg:col-span-1">
            <h2 className="text-lg text-black dark:text-white font-bold mb-4">MAPA DE CALOR</h2>
            <div className="h-96 flex justify-center items-center">
              <HeatMap />
            </div>
          </div>
          {/* Box de Recorrência de Oportunidade */}
          <div className="bg-slate-200  dark:bg-blue-950 p-4 shadow-slate-300 dark:shadow-slate-800 shadow-xl p-4 rounded-lg">
            <h2 className="text-lg text-black dark:text-white font-bold mb-4">RECORRÊNCIA DE OPORTUNIDADE</h2>
            <div className="h-48 flex justify-center items-center">
              <BarChart />
            </div>
          </div>
          {/* Box de Taxas */}
          <div className="bg-slate-200  dark:bg-blue-950 p-4 shadow-slate-300 dark:shadow-slate-800 shadow-xl p-4 rounded-lg">
            <h2 className="text-lg text-black dark:text-white font-bold mb-4">TAXAS</h2>
            <ul className="list-none text-black dark:text-white">
              <li className="flex justify-between mb-2">
                <span>CANCELAMENTO DE SERVIÇO</span>
                <span className="text-red-500">12%</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>SATISFAÇÃO DO CLIENTE</span>
                <span className="text-green-500">78%</span>
              </li>
              <li className="flex justify-between">
                <span>USO DO APLICATIVO CATCH</span>
                <span className="text-blue-500">91%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
