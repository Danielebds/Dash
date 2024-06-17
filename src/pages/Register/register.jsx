import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import useAuth from "../hooks/useAuth";
import "../../App.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [setor, setSetor] = useState("");
  const [programa, setPrograma] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");
  const [confsenha, setConfsenha] = useState("");
  const [confemail, setConfemail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { Signup } = useAuth();

  const handleSignup = async () => {
    if (!email || !confemail || !senha || !empresa || !setor || !programa || !responsavel || !cpf || !cargo || !confsenha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== confemail) {
      setError("Os Emails não são iguais");
      return;
    } else if (senha !== confsenha) {
      setError("As senhas não são iguais");
      return;
    }

    try {
      const res = await Signup(email, senha);
      if (res) {
        setError(res);
        return;
      }
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      setError("Erro ao cadastrar usuário: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="space-y-12 p-6 bg-white rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            Cadastro
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="empresa"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Empresa ou Órgão Responsável
            </label>
            <input
              type="text"
              placeholder="Qual Empresa?"
              value={empresa}
              onChange={(e) => [setEmpresa(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="setor"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Setor
            </label>
            <input
              type="text"
              placeholder="Qual Setor?"
              value={setor}
              onChange={(e) => [setSetor(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="programa"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Programa ou Setor
            </label>
            <input
              type="text"
              placeholder="Qual Programa?"
              value={programa}
              onChange={(e) => [setPrograma(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="atendida"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Quantidade de Pessoas Atendidas
            </label>
            <input
              type="number"
              placeholder="Quantas Pessoas?"
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="responsavel"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Responsável
            </label>
            <input
              type="text"
              placeholder="Responsável?"
              value={responsavel}
              onChange={(e) => [setResponsavel(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="cpf"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Matrícula ou CPF
            </label>
            <input
              type="text"
              placeholder="Qual Seu CPF?"
              value={cpf}
              onChange={(e) => [setCpf(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="cargo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cargo
            </label>
            <input
              type="text"
              placeholder="Qual Cargo?"
              value={cargo}
              onChange={(e) => [setCargo(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="foto"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Foto
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <input
                type="file"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="login"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="senha"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Senha
            </label>
            <input
              type="password"
              placeholder="Digite uma senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="confemail"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Repetir Email
            </label>
            <input
              type="email"
              placeholder="Repita seu email"
              value={confemail}
              onChange={(e) => [setConfemail(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="confsenha"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Repetir Senha
            </label>
            <input
              type="password"
              placeholder="Repita sua senha"
              value={confsenha}
              onChange={(e) => [setConfsenha(e.target.value), setError("")]}
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          {error && <div className="text-red-600">{error}</div>}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link to="/">Cancelar</Link>
          </button>
          <button
            type="button"
            onClick={handleSignup}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Salvar
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Register;
