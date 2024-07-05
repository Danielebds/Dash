import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

// Define o centro inicial do mapa
const centro = [-8.0397, -34.8982];

// Componente para a camada de mapa de calor
const CamadaMapaCalor = ({ pontos }) => {
  const mapa = useMap();

  React.useEffect(() => {
    const camadaCalor = window.L.heatLayer(pontos, { radius: 25 }).addTo(mapa);

    return () => {
      mapa.removeLayer(camadaCalor);
    };
  }, [mapa, pontos]);

  return null;
};

// Componente principal do mapa de calor
const HeatMap = () => {
  const pontos = [
    [-8.0476, -34.8770, 1000], // latitude, longitude, intensidade
    [-7.9984, -34.8431, 100],
    [-8.0167, -34.8833, 1000],
    // Adicione mais pontos conforme necessário
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10">
      <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <MapContainer center={centro} zoom={12} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> colaboradores'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CamadaMapaCalor pontos={pontos} />
        </MapContainer>
      </div>
    </div>
  );
};

export default HeatMap;
