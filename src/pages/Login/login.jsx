import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput } from "tw-elements-react";

//useState para armazenar Email e Senha.
//useNavigate para redirecionar o usuário para o Dashboard.
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

//handleLogin faz a requisição do Endpoint "/login" no arquivo app.js.
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login bem-sucedido, redirecionar para o dashboard
        navigate("/dashboard");
      } else {
        // Exibir mensagem de erro
        setError(data.message);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-2000">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img className="w-50" src="assets/logo.png" alt="Catch Logo" />
        </div>
        <form className="space-y-7" onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 border border-blue-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              style={{ color: "black" }}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
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
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md shadow-sm font-semibold text-lg transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Entrar
            </button>
          </div>
          <div className="text-center">
            <Link
              to="/register"
              className="text-sm text-blue-500 hover:underline"
            >
              NOVO CADASTRO
            </Link>
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