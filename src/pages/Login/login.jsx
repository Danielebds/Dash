import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-2000">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img className="w-50" src="assets/logo.png" alt="Catch Logo" />
        </div>
        <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="login"
              className="block text-sm font-medium text-gray-700"
            >
              Login
            </label>
            <TEInput
              type="text"
              id="login"
              className="w-full mt-1 border border-blue-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <TEInput
              type="password"
              id="password"
              className="w-full mt-1 border border-blue-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              style={{ color: "black" }}
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              RECUPERAR SENHA
            </Link>
          </div>
          <div>
            <button
              type="button"
              className="w-full py-2 text-white bg-blue-500 rounded-md shadow-sm font-semibold text-lg transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Link to="/dashboard">Entrar</Link>
            </button>
          </div>
          <div className="text-center">
            <button>
              <Link
                to="/register"
                className="text-sm text-blue-500 hover:underline"
              >
                NOVO CADASTRO
              </Link>
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            Eu li e concordo com os termos
          </label>
          <p className="text-xs text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
