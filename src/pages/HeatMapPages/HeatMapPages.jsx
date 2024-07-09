import React from 'react';

import Sidebar from '../../components/Sidebar.jsx';
import Header from '../../components/Header.jsx';
import HeatMap from '../../components/HeatMap.jsx';

const HeatMapPage = () => {
  return (
    <div className="flex bg-slate-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="p-4">
          <h2 className="text-lg text-black dark:text-white font-bold mb-4">MAPA DE CALOR</h2>
          <div className="h-96 flex justify-center items-center">
            <HeatMap />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default HeatMapPage;
