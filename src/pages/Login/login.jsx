import { useState } from "react"; // Importa o hook useState do React para gerenciar estados
import { Link, useNavigate } from "react-router-dom"; // Importa Link e useNavigate do react-router-dom para navegação

import { RiLockPasswordFill } from "react-icons/ri"; // Importa o ícone RiLockPasswordFill do react-icons
import { BsFillPersonFill } from "react-icons/bs"; // Importa o ícone BsFillPersonFill do react-icons

const Login = () => {
  const [email, setEmail] = useState(""); // Estado para armazenar o email
  const [password, setPassword] = useState(""); // Estado para armazenar a senha
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro
  const [scrolledToEnd, setScrolledToEnd] = useState(false); // Estado para verificar se a rolagem atingiu o fim
  const navigate = useNavigate(); // Hook para navegação programática

  // Função assíncrona para lidar com o login
  const handleLogin = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST", // Define o método HTTP como POST
        headers: {
          "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify({ email, senha: password }), // Converte o email e senha para uma string JSON
      });

      const data = await response.json(); // Converte a resposta para JSON

      if (response.ok) {
        navigate("/dashboard"); // Redireciona para o dashboard se o login for bem-sucedido
      } else {
        setError(data.message); // Define a mensagem de erro se a resposta não for ok
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error); // Exibe um erro no console
      setError("Erro ao fazer login. Tente novamente mais tarde."); // Define uma mensagem de erro genérica
    }
  };

  // Função para lidar com a rolagem na caixa de termos
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target; // Obtém as propriedades de rolagem
    if (scrollTop + clientHeight >= scrollHeight) {
      setScrolledToEnd(true); // Define scrolledToEnd como true se a rolagem atingiu o fim
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950">
      <div className="w-full max-w-lg p-8 space-y-4 bg-gradient-to-r from-sky-50 to-slate-50 rounded-lg shadow-2xl border-4 border-blue-700 border-x-blue-90">
        <div className="flex justify-center mb-4">
          <img className="w-50" src="assets/logo.png" alt="Catch Logo" />{" "}
          {/* Exibe o logo */}
        </div>
        <form className="space-y-4" onSubmit={handleLogin}>
          {" "}
          {/* Formulário para login */}
          <div className="max-w-lg mb-5">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <BsFillPersonFill className="text-black" size={24} />
              </span>
              <input
                type="email"
                id="exampleFormControlInputEmail"
                label="Email input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-4 pl-10 block w-full border border-blue-950 rounded-lg text-sm bg-white text-black focus:border-blue-600 focus:ring-blue-600"
                placeholder="jane@example.com"
              />
            </div>
          </div>
          <div className="max-w-lg mb-5">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <RiLockPasswordFill className="text-black" size={24} />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="py-3 px-4 pl-10 block w-full border border-blue-950 rounded-lg text-sm bg-white text-black focus:border-blue-600 focus:ring-blue-600"
                placeholder="Digite a Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex mt-4">
              <input
                id="hs-toggle-password-checkbox"
                type="checkbox"
                className="shrink-0 ms-1 ml-1 w-5 h-4 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label
                htmlFor="hs-toggle-password-checkbox "
                className=" ml-1 text-sm text-blue-500 ms-1 text-blue-950"
              >
                Mostrar senha
              </label>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Exibe mensagem de erro, se houver */}
          <div className="flex items-center justify-center">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-950 hover:underline"
            >
              RECUPERAR SENHA
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md shadow-sm font-semibold text-lg transition duration-150 ease-in-out bg-gradient-to-r from-red-600 to-red-700 hover:from-red-400 hover:to-red-500"
            >
              Entrar
            </button>
          </div>
          <div className="text-center">
            <Link
              to="/register"
              className="text-sm text-blue-950 hover:underline"
            >
              NOVO CADASTRO
            </Link>
          </div>
        </form>
       
        <div className="flex flex-col items-center p-4 mt-4">
          <h2 className="text-lg font-bold mb-2 text-black shadow-2xl">
            Termos de Privacidade
          </h2>{" "}
          {/* Título da seção de termos */}
          <div
            className="w-full h-64 border p-4 overflow-y-scroll mb-4 bg-white text-black"
            onScroll={handleScroll} // Chama handleScroll ao rolar
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac fermentum nisi. Quisque id tortor diam. Sed at vehicula libero.
              Ut efficitur justo et purus tincidunt, sed convallis lectus
              mollis. Fusce vel magna aliquam, euismod sapien et, porttitor
              velit. In posuere ex nec eros cursus, id facilisis lorem
              ultricies. Phasellus posuere hendrerit metus, ac sagittis est
              efficitur eu. Duis in urna sit amet libero consectetur sodales.
              Vivamus volutpat, urna nec suscipit vehicula, elit nisi posuere
              mi, at elementum mi felis et elit. Quisque viverra nibh et arcu
              commodo, a tempor metus aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac fermentum nisi. Quisque id tortor diam. Sed at vehicula libero.
              Ut efficitur justo et purus tincidunt, sed convallis lectus
              mollis. Fusce vel magna aliquam, euismod sapien et, porttitor
              velit. In posuere ex nec eros cursus, id facilisis lorem
              ultricies. Phasellus posuere hendrerit metus, ac sagittis est
              efficitur eu. Duis in urna sit amet libero consectetur sodales.
              Vivamus volutpat, urna nec suscipit vehicula, elit nisi posuere
              mi, at elementum mi felis et elit. Quisque viverra nibh et arcu
              commodo, a tempor metus aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac fermentum nisi. Quisque id tortor diam. Sed at vehicula libero.
              Ut efficitur justo et purus tincidunt, sed convallis lectus
              mollis. Fusce vel magna aliquam, euismod sapien et, porttitor
              velit. In posuere ex nec eros cursus, id facilisis lorem
              ultricies. Phasellus posuere hendrerit metus, ac sagittis est
              efficitur eu. Duis in urna sit amet libero consectetur sodales.
              Vivamus volutpat, urna nec suscipit vehicula, elit nisi posuere
              mi, at elementum mi felis et elit. Quisque viverra nibh et arcu
              commodo, a tempor metus aliquam.
            </p>
          </div>
          <button className="bg-blue-950 hover:bg-red-600 text-white px-4 py-2 rounded">
            Aceitar Termos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
