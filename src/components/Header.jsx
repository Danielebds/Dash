import React from "react";
import { AiTwotoneSave } from "react-icons/ai";
import { PiShareNetworkDuotone } from "react-icons/pi";
import { IoPrintOutline } from "react-icons/io5";
import { GrCloudDownload } from "react-icons/gr";
import { FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-black flex justify-between items-center p-4">
      <div className="flex items-center">
        <button className="text-white mr-4 md:hidden" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <img src="./assets/simbolo.png" alt="simbolo" className="h-16 mr-4 md:mr-8" />
        <div className="text-white text-sm">
          <div><strong className="text-red-700">CLIENTE:</strong> PREFEITURA DE OLINDA</div>
          <div><strong className="text-red-700">PROGRAMA:</strong> REDE VIVA</div>
          <div><strong className="text-red-700">RESPONSÁVEL:</strong> CARLOS AUGUSTO</div>
          <div><strong className="text-red-700">QUANTITATIVO:</strong> 600</div>
        </div>
      </div>
      <div className="flex items-center text-white text-xl space-x-4">
        <AiTwotoneSave />
        <PiShareNetworkDuotone />
        <IoPrintOutline />
        <GrCloudDownload />
      </div>
      <div>
        <img src="./assets/prefeitura.png" alt="prefeitura" className="h-16 ml-4 md:ml-8" />
      </div>
    </header>
  );
};

export default Header;
