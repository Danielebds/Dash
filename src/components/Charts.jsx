import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

// Dados fictícios iniciais
const dataInicial = {
  'Construção Civil': [
    { name: 'Pedreiro', uv: 4000 },
    { name: 'Encanador', uv: 3000 },
    { name: 'Eletricista', uv: 1000 },
    { name: 'Ladrilheiro', uv: 2780 },
    { name: 'Ajudante', uv: 1890 },
    { name: 'Pintor', uv: 2390 },
  ],
  'Mecânica': [
    { name: 'Mecânico A', uv: 3500 },
    { name: 'Mecânico B', uv: 2500 },
    { name: 'Mecânico C', uv: 1500 },
  ],
  'Comércio': [
    { name: 'Vendedor', uv: 3000 },
    { name: 'Caixa', uv: 2000 },
    { name: 'Estoquista', uv: 1500 },
  ],
  'Aulas': [
    { name: 'Professor de Matemática', uv: 3200 },
    { name: 'Professor de Português', uv: 2800 },
    { name: 'Professor de Ciências', uv: 2500 },
  ],
};

const COLORS = [
  'url(#colorPedreiro)',
  'url(#colorEncanador)',
  'url(#colorEletricista)',
  'url(#colorLadrilheiro)',
  'url(#colorAjudante)',
  'url(#colorPintor)',
  'url(#colorVendedor)',
  'url(#colorCaixa)',
  'url(#colorEstoquista)',
  'url(#colorProfessorMatematica)',
  'url(#colorProfessorPortugues)',
  'url(#colorProfessorCiencias)',
];

const Charts = ({ selectedArea }) => {
  const data = dataInicial[selectedArea] || [];

  useEffect(() => {
    console.log(`Atualizando gráfico para a área: ${selectedArea}`);
  }, [selectedArea]);

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorPedreiro" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={1}/>
              <stop offset="95%" stopColor="#86efac" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorEncanador" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#eab308" stopOpacity={1}/>
              <stop offset="95%" stopColor="#facc15" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorEletricista" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={1}/>
              <stop offset="95%" stopColor="#fdba74" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorLadrilheiro" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={1}/>
              <stop offset="95%" stopColor="#f87171" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorAjudante" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={1}/>
              <stop offset="95%" stopColor="#eab308" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorPintor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={1}/>
              <stop offset="95%" stopColor="#eab308" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorVendedor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4B0082" stopOpacity={1}/>
              <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorCaixa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFD700" stopOpacity={1}/>
              <stop offset="95%" stopColor="#FFA500" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorEstoquista" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF4500" stopOpacity={1}/>
              <stop offset="95%" stopColor="#FF6347" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorProfessorMatematica" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#32CD32" stopOpacity={1}/>
              <stop offset="95%" stopColor="#7CFC00" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorProfessorPortugues" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00FA9A" stopOpacity={1}/>
              <stop offset="95%" stopColor="#ADFF2F" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorProfessorCiencias" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4682B4" stopOpacity={1}/>
              <stop offset="95%" stopColor="#5F9EA0" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv">
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
