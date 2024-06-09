import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <main>
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <hr />

      <div>
        <div className="card-areas">
          <div>
            <img />
            <span>CARD 1</span>
            <div>QUANTIDADE: 150</div>
          </div>
          <div>
            <img />
            <span>CARD 2</span>
            <div>QUANTIDADE: 150</div>
          </div>
          <div>
            <img />
            <span>CARD 3</span>
            <div>QUANTIDADE: 150</div>
          </div>
          <div>
            <img />
            <span>CARD 4</span>
            <div>QUANTIDADE: 150</div>
          </div>
        </div>
        <hr />

        <div>
          <div className="grafic-subareas">
            <div>PEDREIRO</div>
            <div>ENCANADOR</div>
            <div>ELETRICISTA</div>
            <div>LADRILHEIRO</div>
            <div>AJUDANTE</div>
            <div>PINTOR</div>

            <button>CARREGAR MAIS...</button>
          </div>
          <hr />
          <div className="grafic-static">
            <div>
              <h1>RECORRÊNCIA DE OPORTUNIDADES</h1>
              <div>PEDREIRO</div>
              <div>ENCANADOR</div>
              <div>AJUDANTE</div>
            </div>
            <hr />

            <div>
              <h1>TAXAS</h1>
              <span>CANCELAMENTO DE SERVIÇO --------- 12%</span>
              <br />
              <span>SATISFAÇÃO DO CLIENTE ---------------- 78%</span>
              <br />
              <span>USO DO APLICATIVO CATCH ------------- 12%</span>
            </div>
          </div>
          <hr />

          <div>
            <h1>MAPA DE CALOR</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
