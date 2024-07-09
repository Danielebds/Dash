import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import L from 'leaflet';

// Centro inicial do mapa
const centro = [-8.0397, -34.8982];

// Função para criar ícones personalizados
const createIcon = (color, value) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px;">${value}</div>`,
  });
};

const HeatMap = ({ selectedArea }) => {
  // Estado para armazenar os dados dos indicadores
  const [indicadores, setIndicadores] = useState([]);

  // Atualizar os indicadores com base na área selecionada
  useEffect(() => {
    const newIndicators = {
      'Construção Civil': [
        { position: [-8.0397, -34.9182], value: 120, color: '#22c55e' }, 
        { position: [-8.0497, -34.9082], value: 50, color: '#dc2626' }, 
        { position: [-8.0597, -34.8982], value: 30, color: '#eab308' }, 
      ],
      'Mecânica': [
        { position: [-8.0397, -34.9182], value: 80, color: '#2563eb' }, 
        { position: [-8.0497, -34.9082], value: 60, color: '#f97316' }, 
        { position: [-8.0597, -34.8982], value: 40, color: '#22c55e' }, 
      ],
      'Comércio': [
        { position: [-8.0397, -34.9182], value: 70, color: '#dc2626' },
        { position: [-8.0497, -34.9082], value: 60, color: '#2563eb' },
        { position: [-8.0597, -34.8982], value: 50, color: '#eab308' },
      ],
      'Aulas': [
        { position: [-8.0397, -34.9182], value: 90, color: '#2563eb' },
        { position: [-8.0497, -34.9082], value: 70, color: '#eab308' },
        { position: [-8.0597, -34.8982], value: 60, color: '#dc2626' },
      ],
    };
    setIndicadores(newIndicators[selectedArea] || []);
  }, [selectedArea]);

  const pontos = [
    [-8.0476, -34.8770, 1000], // latitude, longitude, intensidade
    [-7.9984, -34.8431, 100],
    [-8.0167, -34.8833, 1000],
  ];

  const CamadaMapaCalor = ({ pontos }) => {
    const mapa = useMap();

    useEffect(() => {
      const camadaCalor = L.heatLayer(pontos, { radius: 25 }).addTo(mapa);

      // Limpar a camada de calor quando o componente for desmontado
      return () => {
        mapa.removeLayer(camadaCalor);
      };
    }, [mapa, pontos]);

    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10">
      <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <MapContainer center={centro} zoom={12} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> colaboradores'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CamadaMapaCalor pontos={pontos} />
          {indicadores.map((indicador, index) => (
            <Marker 
              key={index} 
              position={indicador.position} 
              icon={createIcon(indicador.color, indicador.value)}
            >
              <Popup>
                Valor: {indicador.value}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default HeatMap;
