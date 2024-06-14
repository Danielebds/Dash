import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ComponenteMapaCalor from "../Mapa/MapaCalor"; // Importe o componente de mapa de calor

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-4 overflow-auto">
          <hr className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-green-500 p-4 shadow-lg">
              <img src="./assets/engenheiro.png" alt="Construção Civil" className="h-16 mb-2" />
              <span>CONSTRUÇÃO CIVIL</span>
              <div>QUANTIDADE: 200</div>
            </div>
            <div className="bg-yellow-500 p-4 shadow-lg">
              <img src="./assets/mecanico.png" alt="Mecânica" className="h-16 mb-2" />
              <span>MECÂNICA</span>
              <div>QUANTIDADE: 150</div>
            </div>
            <div className="bg-orange-500 p-4 shadow-lg">
              <img src="./assets/comercio.png" alt="Comércio" className="h-16 mb-2" />
              <span>COMÉRCIO</span>
              <div>QUANTIDADE: 150</div>
            </div>
            <div className="bg-red-500 p-4 shadow-lg">
              <img src="./assets/aulas.png" alt="Aulas" className="h-16 mb-2" />
              <span>AULAS</span>
              <div>QUANTIDADE: 100</div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-lg">
              <h1>DEMANDA POR HABILIDADE: SUB ÁREAS</h1>
              <div>PEDREIRO</div>
              <div>ENCANADOR</div>
              <div>ELETRICISTA</div>
              <div>LADRILHEIRO</div>
              <div>AJUDANTE</div>
              <div>PINTOR</div>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">CARREGAR MAIS...</button>
            </div>
            <div className="bg-white p-4 shadow-lg">
              <h1>RECORRÊNCIA DE OPORTUNIDADES</h1>
              <div>PEDREIRO</div>
              <div>ENCANADOR</div>
              <div>AJUDANTE</div>
              <h1>TAXAS</h1>
              <span>CANCELAMENTO DE SERVIÇO --------- 12%</span>
              <br />
              <span>SATISFAÇÃO DO CLIENTE ---------------- 78%</span>
              <br />
              <span>USO DO APLICATIVO CATCH ------------- 12%</span>
            </div>
          </div>
          <hr className="my-2" />
          <div className="bg-white p-2 shadow-lg">
              <div className="absolute inset-0 border-1 border-blue-500 rounded-lg pointer-events-none"></div>
              <ComponenteMapaCalor />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
