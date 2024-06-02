import React from "react";

// Este componente deverá puxar os dados das empresas cadastradas e enviar para o Dashboard

const Data = () => {
  return (
    <div>
      <div>
        <h1>Minha conta</h1>
        <div>
          <form>
            <label>Empresa ou órgão responsável *</label>
            <input type="text" />

            <label>Setor *</label>
            <input type="text" />

            <label> Programa ou Setor *</label>
            <input type="text" />

            <label>Quantidade de pessoas atendidas *</label>
            <input type="text" />

            <label>Responsável *</label>
            <input type="text" />

            <label>Matrícula ou CPF *</label>
            <input type="text" />

            <label>Cargo *</label>
            <input type="text" />

            <label>
              <input type="file" /> Foto *
              <br />
            </label>

            <label>Login *</label>
            <input type="text" />

            <label>Senha *</label>
            <input type="password" />

            <label>Repetir senha *</label>
            <input type="text" />
          </form>
        </div>
        <div>
          <button>Salvar</button>

          <button>
            <a>Excluir</a>
          </button>

          <button>
            <a>Sair</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;
