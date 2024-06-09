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

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <FaUser />
            <span>PERFIL</span>
          </li>
          <li>
            <FaMap />
            <span>MAPA DE CALOR</span>
          </li>
          <li>
            <FaChartLine />
            <span>ESTATÍSTICA</span>
          </li>
          <li>
            <FaNoteSticky />
            <span>RELATÓRIO</span>
          </li>
          <li>
            <FaClock />
            <span>HISTÓRICO</span>
          </li>
          <li>
            <FaMessage />
            <span>FAQ</span>
          </li>
          <li>
            <FaPhoneVolume />
            <span>CONTATO</span>
          </li>
          <li>
            <FaTrash />
            <span>EXCLUIR</span>
          </li>
          <li>
            <FaArrowRightFromBracket />
            <Link to="/">SAIR</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
