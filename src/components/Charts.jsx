import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dados do gráfico
const data = [
  { name: 'Pedreiro', uv: 4000 },
  { name: 'Encanador', uv: 3000 },
  { name: 'Eletricista', uv: 2000 },
  { name: 'Ladrilheiro', uv: 2780 },
  { name: 'Ajudante', uv: 1890 },
  { name: 'Pintor', uv: 2390 },
];

const Charts = () => {
  return (
    <div className="w-full h-64"> {/* Define a altura do contêiner */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
