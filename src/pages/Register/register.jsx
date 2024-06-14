import React from "react";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import "../../App.css"; 

const Register = () => {
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
              name="empresa"
              id="empresa"
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
              name="setor"
              id="setor"
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
              name="programa"
              id="programa"
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="quantidade"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Quantidade de Pessoas Atendidas
            </label>
            <input
              type="number"
              name="quantidade"
              id="quantidade"
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
              name="responsavel"
              id="responsavel"
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
              name="cpf"
              id="cpf"
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
              name="cargo"
              id="cargo"
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
              <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="login"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Login
            </label>
            <input
              type="text"
              name="login"
              id="login"
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
              name="senha"
              id="senha"
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="repetir-senha"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Repetir Senha
            </label>
            <input
              type="password"
              name="repetir-senha"
              id="repetir-senha"
              className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link to="/">Salvar</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
