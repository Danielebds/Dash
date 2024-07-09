import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';


// Dados do gráfico
const data = [
  { name: 'Pedreiro', uv: 4000 },
  { name: 'Encanador', uv: 3000 },
  { name: 'Eletricista', uv: 1000 },
  { name: 'Ladrilheiro', uv: 2780 },
  { name: 'Ajudante', uv: 1890 },
  { name: 'Pintor', uv: 2390 },
];

// Gradientes de cor
const COLORS = [
  'url(#colorPedreiro)',
  'url(#colorEncanador)',
  'url(#colorEletricista)',
  'url(#colorLadrilheiro)',
  'url(#colorAjudante)',
  'url(#colorPintor)',
];

const Charts = () => {
  return (
    <div className="w-full h-64"> {/* Define a altura do contêiner */}
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