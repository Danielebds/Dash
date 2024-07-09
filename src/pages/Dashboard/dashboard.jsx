import React, { useState } from 'react';
import Sidebar from "../../components/Sidebar.jsx";
import Header from "../../components/Header.jsx";
import Charts from "../../components/Charts.jsx";
import BarChart from "../../components/Barchart.jsx";
import HeatMap from "../../components/HeatMap.jsx";

const Dashboard = () => {
  // Estado para armazenar a área selecionada
  const [selectedArea, setSelectedArea] = useState('Construção Civil');

  // Dados de cada área
  const data = {
    'Construção Civil': {
      cancellationRate: 10,
      customerSatisfaction: 85,
      appUsage: 95,
      quantity: 200,
    },
    'Mecânica': {
      cancellationRate: 15,
      customerSatisfaction: 75,
      appUsage: 88,
      quantity: 150,
    },
    'Comércio': {
      cancellationRate: 12,
      customerSatisfaction: 78,
      appUsage: 91,
      quantity: 150,
    },
    'Aulas': {
      cancellationRate: 8,
      customerSatisfaction: 90,
      appUsage: 93,
      quantity: 100,
    },
  };

  // Função para atualizar a área selecionada ao clicar nos boxes
  const handleAreaClick = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="flex bg-slate-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="p-4 grid grid-cols-1 xl:grid-cols-4 gap-4">
          {/* Box de Construção Civil */}
          <div 
            className="bg-gradient-to-r from-green-500 to-green-300 shadow-xl p-4 rounded-lg text-black flex flex-col items-center cursor-pointer"
            onClick={() => handleAreaClick('Construção Civil')}
          >
            <img src="/assets/engenheiro.png" alt="Construção Civil" className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-bold">CONSTRUÇÃO CIVIL</h2>
            <p className="text-2xl font-bold">QTD: {data['Construção Civil'].quantity}</p>
          </div>
          {/* Box de Mecânica */}
          <div 
            className="bg-gradient-to-r from-yellow-500 to-yellow-300 shadow-xl p-4 rounded-lg text-black flex flex-col items-center cursor-pointer"
            onClick={() => handleAreaClick('Mecânica')}
          >
            <img src="/assets/mecanico.png" alt="Mecânica" className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-bold">MECÂNICA</h2>
            <p className="text-2xl font-bold">QTD: {data['Mecânica'].quantity}</p>
          </div>
          {/* Box de Comércio */}
          <div 
            className="bg-gradient-to-r from-orange-500 to-orange-300 shadow-xl p-4 rounded-lg text-black flex flex-col items-center cursor-pointer"
            onClick={() => handleAreaClick('Comércio')}
          >
            <img src="/assets/comercio.png" alt="Comércio" className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-bold">COMÉRCIO</h2>
            <p className="text-2xl font-bold">QTD: {data['Comércio'].quantity}</p>
          </div>
          {/* Box de Aulas */}
          <div 
            className="bg-gradient-to-r from-red-500 to-red-400 shadow-xl p-4 rounded-lg text-black flex flex-col items-center cursor-pointer"
            onClick={() => handleAreaClick('Aulas')}
          >
            <img src="/assets/aulas.png" alt="Aulas" className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-bold">AULAS</h2>
            <p className="text-2xl font-bold">QTD: {data['Aulas'].quantity}</p>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Box de Demanda por Habilidade - Sub Áreas */}
          <div className="bg-slate-200 dark:bg-[#142630] p-4 shadow-xl rounded-lg col-span-1 lg:col-span-2">
            <h2 className="text-lg text-black dark:text-white font-bold mb-4">DEMANDA POR HABILIDADE - SUB ÁREAS</h2>
            <div className="w-full h-64">
              <Charts selectedArea={selectedArea} />
            </div>
          </div>
          {/* Box de Mapa de Calor */}
          <div className="bg-slate-200 dark:bg-[#142630] p-4 shadow-xl rounded-lg lg:row-span-2 lg:col-span-1">
            <h2 className="text-lg text-black dark:text-white font-bold mb-4">MAPA DE CALOR</h2>
            <div className="h-96 flex justify-center items-center">
              <HeatMap selectedArea={selectedArea} />
            </div>
          </div>
          {/* Box de Recorrência de Oportunidade */}
          <div className="bg-slate-200 dark:bg-[#142630] p-4 shadow-xl rounded-lg">
            <h2 className="text-lg text-black dark:text-white font-bold mb-4">RECORRÊNCIA DE OPORTUNIDADE</h2>
            <div className="h-48 flex justify-center items-center">
              <BarChart selectedArea={selectedArea} />
            </div>
          </div>
          {/* Box de Taxas */}
          <div className="bg-slate-200 dark:bg-[#142630] p-4 shadow-xl rounded-lg">
            <h2 className="text-lg text-black dark:text-white font-bold mb-4">TAXAS</h2>
            <ul className="list-none text-black dark:text-white">
              <li className="flex justify-between mb-2">
                <span>CANCELAMENTO DE SERVIÇO</span>
                <span className="text-red-600">{data[selectedArea].cancellationRate}%</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>SATISFAÇÃO DO CLIENTE</span>
                <span className="text-green-500">{data[selectedArea].customerSatisfaction}%</span>
              </li>
              <li className="flex justify-between">
                <span>USO DO APLICATIVO CATCH</span>
                <span className="text-blue-600">{data[selectedArea].appUsage}%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
