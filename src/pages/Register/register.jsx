import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import "../../App.css"; 

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cpfMat: '',
    empresa: '',
    programaSetor: '',
    responsavel: '',
    setor: '',
    cargo: '',
    quantidadePessoas: '',
    email: '',
    senha: '',
    reSenha: '',
    imagem: null,
    nome: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      imagem: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      console.log("Resposta do servidor:", data);
      if (response.ok) {
        navigate("/");
      } else {
        console.error("Erro:", data);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  const handleAddProgram = () => {
    setAdditionalPrograms([...additionalPrograms, { programaSetor: '', quantidadePessoas: '' }]);
  };

  const handleAddResponsavel = () => {
    setAdditionalResponsaveis([...additionalResponsaveis, { responsavel: '', cpfMat: '', cargo: '', imagem: null }]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950">
      <form onSubmit={handleSubmit} className="space-y-12 p-6 bg-white rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Cadastro</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="cpfMat" className="block text-sm font-medium leading-6 text-gray-900">CPF/Matricula</label>
            <input type="text" name="cpfMat" id="cpfMat" value={formData.cpfMat} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">Nome completo</label>
            <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="empresa" className="block text-sm font-medium leading-6 text-gray-900">Empresa ou Órgão Responsável</label>
            <input type="text" name="empresa" id="empresa" value={formData.empresa} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            
          </div>
        
          <div className="sm:col-span-3">
            <label htmlFor="programaSetor" className="block text-sm font-medium leading-6 text-gray-900">Programa/Setor</label>
            <input type="text" name="programaSetor" id="programaSetor" value={formData.programaSetor} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <button type="button" onClick={handleAddProgram} className="mt-2 text-blue-700">+ Adicionar mais programas</button>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="responsavel" className="block text-sm font-medium leading-6 text-gray-900">Responsável</label>
            <input type="text" name="responsavel" id="responsavel" value={formData.responsavel} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <button type="button" onClick={handleAddResponsavel} className="mt-2 text-blue-700">+ Adicionar mais responsáveis</button>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="setor" className="block text-sm font-medium leading-6 text-gray-900">Setor</label>
            <input type="text" name="setor" id="setor" value={formData.setor} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="cargo" className="block text-sm font-medium leading-6 text-gray-900">Cargo</label>
            <input type="text" name="cargo" id="cargo" value={formData.cargo} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="quantidadePessoas" className="block text-sm font-medium leading-6 text-gray-900">Quantidade de Pessoas</label>
            <input type="number" name="quantidadePessoas" id="quantidadePessoas" value={formData.quantidadePessoas} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="senha"
                id="senha"
                value={formData.senha}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEyeInvisible className="text-black" /> : <AiFillEye className="text-black" />}
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="reSenha" className="block text-sm font-medium leading-6 text-gray-900">Confirme a Senha</label>
            <div className="relative">
              <input
                type={showRePassword ? "text" : "password"}
                name="reSenha"
                id="reSenha"
                value={formData.reSenha}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={toggleRePasswordVisibility}
              >
                {showRePassword ? <AiFillEyeInvisible className="text-black" /> : <AiFillEye className="text-black" />}
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="imagem" className="block text-sm font-medium leading-6 text-gray-900">Imagem</label>
            <input type="file" name="imagem" id="imagem" onChange={handleFileChange} className="mt-2 block w-full text-gray-900 bg-transparent border-0 py-1.5 text-sm shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="rounded-md bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link to="/">Cancelar</Link></button>
          <button type="submit" className="rounded-md bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Salvar
          </button>
          <button type="button" onClick={handleAddResponsavel} className="rounded-md bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Adicionar Mais
          </button>
        </div>
      
      </form>
    </div>
  );
};

export default Register;
