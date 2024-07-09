import React, { useState } from 'react';

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "O que é o Dashboard Catch?",
      answer: "O Dashboard Catch é uma interface onde você pode gerenciar suas habilidades, visualizar oportunidades de negócio e acompanhar seu desempenho no Catch.",
    },
    {
      question: "Como acesso meu perfil no Dashboard Catch?",
      answer: "Para acessar seu perfil, clique na opção 'Dashboard' no menu à esquerda. Lá, você pode ver e editar suas informações pessoais e habilidades.",
    },
    {
      question: "Como insiro novos dados no Dashboard Catch?",
      answer: "No menu, vá até a opção 'Estatística' ou 'Relatório'. Aqui você pode inserir ou editar informações sobre suas oportunidades, como quantidade de serviços prestados, data de inclusão e período de atualização.",
    },
    {
      question: "O que são os Catch Points e como funcionam?",
      answer: "Catch Points são pontos que você recebe ao definir e demonstrar suas habilidades. Você começa com 5 Catch Points para distribuir entre duas habilidades, e ganha mais pontos conforme realiza serviços. Quanto maior a pontuação, mais chances de receber novos matches.",
    },
    {
      question: "Como vejo meus matches no Dashboard Catch?",
      answer: "Na opção 'Demanda por Habilidade - Sub Áreas' do menu 'Estatística', você pode visualizar todos os matches realizados, incluindo detalhes sobre as oportunidades encontradas e o status de cada uma.",
    },
    {
      question: "Posso comparar diferentes oportunidades no Dashboard Catch?",
      answer: "Sim, na opção 'Análise' do menu, você pode realizar uma análise comparativa entre diferentes oportunidades, se estiver cadastrado em mais de uma.",
    },
    {
      question: "Como gero relatórios sobre meu desempenho no Dashboard Catch?",
      answer: "Na opção 'Relatório' do menu, você pode gerar relatórios detalhados sobre seu desempenho, incluindo matches realizados e oportunidades disponíveis.",
    },
    {
      question: "O que fazer se eu esquecer minha senha?",
      answer: "Na página de login, clique em 'Recuperar senha' e siga as instruções para redefinir sua senha.",
    },
    {
      question: "É seguro usar o Dashboard Catch?",
      answer: "Sim, o Catch preza pela segurança dos seus dados de acordo com a LGPD (Lei Geral da Proteção de Dados).",
    },
    {
      question: "Como posso editar meus programas sociais no Dashboard Catch?",
      answer: "No menu 'Perfil', você pode adicionar ou editar programas sociais, incluindo estado, cidade, nome do programa e logo.",
    }
  ];

  return (
    <div className="p-4 ">
      <h2 className="text-2xl dark:text-white text-black font-bold mb-4">FAQ - Dashboard Catch</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <button
            className="flex justify-between  text-black dark:text-white items-center w-full p-4 bg-slate-100 dark:bg-[#142630] rounded-lg focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-6 h-6 transform ${expanded === index ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expanded === index && (
            <div className="p-4 bg-slate-200 text-black dark:text-white dark:bg-cyan-950 rounded-lg mt-2">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
