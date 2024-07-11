import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import "../../App.css";

const Register = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState([
    {
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
      additionalPrograms: [],
      additionalResponsaveis: [],
    },
  ]);
  const [showPassword, setShowPassword] = useState([false]);
  const [showRePassword, setShowRePassword] = useState([false]);
  const [errors, setErrors] = useState([{}]);

  const togglePasswordVisibility = (index) => {
    const updatedShowPassword = [...showPassword];
    updatedShowPassword[index] = !updatedShowPassword[index];
    setShowPassword(updatedShowPassword);
  };

  const toggleRePasswordVisibility = (index) => {
    const updatedShowRePassword = [...showRePassword];
    updatedShowRePassword[index] = !updatedShowRePassword[index];
    setShowRePassword(updatedShowRePassword);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedForms = [...forms];
    updatedForms[index][name] = value;
    setForms(updatedForms);
  };

  const handleFileChange = (e, index) => {
    const updatedForms = [...forms];
    updatedForms[index].imagem = e.target.files[0];
    setForms(updatedForms);
  };

  const handleAddProgram = (index) => {
    const updatedForms = [...forms];
    updatedForms[index].additionalPrograms.push({ programaSetor: '' });
    setForms(updatedForms);
  };

  const handleAddResponsavel = (index) => {
    const updatedForms = [...forms];
    updatedForms[index].additionalResponsaveis.push({ responsavel: '' });
    setForms(updatedForms);
  };

  const validateForm = (form) => {
    const newErrors = {};
    if (!form.cpfMat) newErrors.cpfMat = 'Campo obrigatório';
   
    
    if (!form.empresa) newErrors.empresa = 'Campo obrigatório';
    if (!form.programaSetor) newErrors.programaSetor = 'Campo obrigatório';
    if (!form.responsavel) newErrors.responsavel = 'Campo obrigatório';
    if (!form.setor) newErrors.setor = 'Campo obrigatório';
    if (!form.cargo) newErrors.cargo = 'Campo obrigatório';
    if (!form.quantidadePessoas) newErrors.quantidadePessoas = 'Campo obrigatório';
    if (!form.email) newErrors.email = 'Campo obrigatório';
    if (!form.senha) newErrors.senha = 'Campo obrigatório';
    if (!form.reSenha) newErrors.reSenha = 'Campo obrigatório';
    if (form.senha !== form.reSenha) newErrors.reSenha = 'Senhas não coincidem';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = forms.map(validateForm);
    if (newErrors.some((error) => Object.keys(error).length > 0)) {
      setErrors(newErrors);
      return;
    }

    try {
      for (const form of forms) {
        const formDataToSend = new FormData();
        Object.entries(form).forEach(([key, value]) => {
          if (key !== 'additionalPrograms' && key !== 'additionalResponsaveis') {
            formDataToSend.append(key, value);
          }
        });
        form.additionalPrograms.forEach((program, index) => {
          formDataToSend.append(`additionalPrograms[${index}][programaSetor]`, program.programaSetor);
        });
        form.additionalResponsaveis.forEach((responsavel, index) => {
          formDataToSend.append(`additionalResponsaveis[${index}][responsavel]`, responsavel.responsavel);
        });

        const response = await fetch("http://localhost:8080/register", {
          method: "POST",
          body: formDataToSend,
        });
        const data = await response.json();
        console.log("Resposta do servidor:", data);
        if (!response.ok) {
          console.error("Erro:", data);
        }
      }
      navigate("/");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  const handleAddForm = () => {
    setForms([
      ...forms,
      {
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
        additionalPrograms: [],
        additionalResponsaveis: [],
      },
    ]);
    setShowPassword([...showPassword, false]);
    setShowRePassword([...showRePassword, false]);
    setErrors([...errors, {}]);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#142630] via-cyan-800 to-[#142630]">
      <form onSubmit={handleSubmit} className="space-y-12 p-6 bg-white rounded-lg shadow-md w-full max-w-4xl">
        {forms.map((form, index) => (
          <div key={index} className="space-y-12">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor={`cpfMat-${index}`} className="block text-sm font-medium leading-6 text-gray-900">CPF/Matricula<span className="text-red-600">*</span></label>
                <input type="text" name="cpfMat" id={`cpfMat-${index}`} value={form.cpfMat} onChange={(e) => handleChange(e, index)} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                {errors[index]?.cpfMat && <p className="text-red-600 text-sm">{errors[index].cpfMat}</p>}
              </div>
            
              <div className="sm:col-span-3">
                <label htmlFor={`empresa-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Empresa ou Órgão Responsável<span className="text-red-600">*</span></label>
                <input type="text" name="empresa" id={`empresa-${index}`} value={form.empresa} onChange={(e) => handleChange(e, index)} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                {errors[index]?.empresa && <p className="text-red-600 text-sm">{errors[index].empresa}</p>}
              </div>
            
              <div className="sm:col-span-3">
                <label htmlFor={`programaSetor-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Programa/Setor<span className="text-red-600">*</span></label>
                <input type="text" name="programaSetor" id={`programaSetor-${index}`} value={form.programaSetor} onChange={(e) => handleChange(e, index)} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                {errors[index]?.programaSetor && <p className="text-red-600 text-sm">{errors[index].programaSetor}</p>}
                <button type="button" onClick={() => handleAddProgram(index)} className="mt-2 text-[#142630]">+ Adicionar mais programas</button>
              </div>

              {form.additionalPrograms.map((program, programIndex) => (
                <div key={programIndex} className="sm:col-span-3">
                  <label htmlFor={`additionalProgram-${index}-${programIndex}`} className="block text-sm font-medium leading-6 text-gray-900">Programa/Setor {programIndex + 2}<span className="text-red-600">*</span></label>
                  <input type="text" name={`additionalProgram-${index}-${programIndex}`} id={`additionalProgram-${index}-${programIndex}`} value={program.programaSetor} onChange={(e) => {
                    const updatedForms = [...forms];
                    updatedForms[index].additionalPrograms[programIndex].programaSetor = e.target.value;
                    setForms(updatedForms);
                  }} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                </div>
              ))}

              <div className="sm:col-span-3">
                <label htmlFor={`responsavel-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Responsável<span className="text-red-600">*</span></label>
                <input type="text" name="responsavel" id={`responsavel-${index}`} value={form.responsavel} onChange={(e) => handleChange(e, index)} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                {errors[index]?.responsavel && <p className="text-red-600 text-sm">{errors[index].responsavel}</p>}
                <button type="button" onClick={() => handleAddResponsavel(index)} className="mt-2 text-[#142630]">+ Adicionar mais responsáveis</button>
              </div>

              {form.additionalResponsaveis.map((responsavel, responsavelIndex) => (
                <div key={responsavelIndex} className="sm:col-span-3">
                  <label htmlFor={`additionalResponsavel-${index}-${responsavelIndex}`} className="block text-sm font-medium leading-6 text-gray-900">Responsável {responsavelIndex + 2}<span className="text-red-600">*</span></label>
                  <input type="text" name={`additionalResponsavel-${index}-${responsavelIndex}`} id={`additionalResponsavel-${index}-${responsavelIndex}`} value={responsavel.responsavel} onChange={(e) => {
                    const updatedForms = [...forms];
                    updatedForms[index].additionalResponsaveis[responsavelIndex].responsavel = e.target.value;
                    setForms(updatedForms);
                  }} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                </div>
              ))}

              <div className="sm:col-span-3">
                <label htmlFor={`setor-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Setor<span className="text-red-600">*</span></label>
                <input type="text" name="setor" id={`setor-${index}`} value={form.setor} onChange={(e) => handleChange(e, index)} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                {errors[index]?.setor && <p className="text-red-600 text-sm">{errors[index].setor}</p>}
              </div>

              <div className="sm:col-span-3">
                <label htmlFor={`cargo-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Cargo<span className="text-red-600">*</span></label>
                <input type="text" name="cargo" id={`cargo-${index}`} value={form.cargo} onChange={(e) => handleChange(e, index)} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                {errors[index]?.cargo && <p className="text-red-600 text-sm">{errors[index].cargo}</p>}
              </div>

              <div className="sm:col-span-3">
                <label htmlFor={`quantidadePessoas-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Quantidade de Pessoas<span className="text-red-600">*</span></label>
                <input type="number" name="quantidadePessoas" id={`quantidadePessoas-${index}`} value={form.quantidadePessoas} onChange={(e) => handleChange(e, index)} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                {errors[index]?.quantidadePessoas && <p className="text-red-600 text-sm">{errors[index].quantidadePessoas}</p>}
              </div>

              <div className="sm:col-span-3">
                <label htmlFor={`email-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Email<span className="text-red-600">*</span></label>
                <input type="email" name="email" id={`email-${index}`} value={form.email} onChange={(e) => handleChange(e, index)} className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6" />
                {errors[index]?.email && <p className="text-red-600 text-sm">{errors[index].email}</p>}
              </div>

              <div className="sm:col-span-3">
                <label htmlFor={`senha-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Senha<span className="text-red-600">*</span></label>
                <div className="relative">
                  <input
                    type={showPassword[index] ? "text" : "password"}
                    name="senha"
                    id={`senha-${index}`}
                    value={form.senha}
                    onChange={(e) => handleChange(e, index)}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => togglePasswordVisibility(index)}
                  >
                    {showPassword[index] ? <AiFillEyeInvisible className="text-black" /> : <AiFillEye className="text-black" />}
                  </div>
                </div>
                {errors[index]?.senha && <p className="text-red-600 text-sm">{errors[index].senha}</p>}
              </div>

              <div className="sm:col-span-3">
                <label htmlFor={`reSenha-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Confirme a Senha<span className="text-red-600">*</span></label>
                <div className="relative">
                  <input
                    type={showRePassword[index] ? "text" : "password"}
                    name="reSenha"
                    id={`reSenha-${index}`}
                    value={form.reSenha}
                    onChange={(e) => handleChange(e, index)}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142630] sm:text-sm sm:leading-6"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => toggleRePasswordVisibility(index)}
                  >
                    {showRePassword[index] ? <AiFillEyeInvisible className="text-black" /> : <AiFillEye className="text-black" />}
                  </div>
                </div>
                {errors[index]?.reSenha && <p className="text-red-600 text-sm">{errors[index].reSenha}</p>}
              </div>

              <div className="sm:col-span-3">
                <label htmlFor={`imagem-${index}`} className="block text-sm font-medium leading-6 text-gray-900">Imagem</label>
                <input type="file" name="imagem" id={`imagem-${index}`} onChange={(e) => handleFileChange(e, index)} className="mt-2 block w-full text-gray-900 bg-transparent border-0 py-1.5 text-sm shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" />
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" onClick={handleCancel} className="rounded-md bg-[#142630] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Cancelar
          </button>
          <button type="submit" className="rounded-md bg-[#142630] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Salvar
          </button>
          <button type="button" onClick={handleAddForm} className="rounded-md bg-[#142630] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Adicionar Mais
          </button>
        </div>
      
      </form>
    </div>
  );
};

export default Register;
