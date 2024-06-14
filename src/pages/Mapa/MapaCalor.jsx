import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import { Link } from 'react-router-dom';

// Define o centro inicial do mapa
const centro = [-8.0397, -34.8982]; // Removeu a anotação de tipo

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
const ComponenteMapaCalor = () => {
  const pontos = [
    [-8.0476, -34.8770, 1000], // latitude, longitude, intensidade
    [-7.9984, -34.8431, 100],
    [-8.0167, -34.8833, 1000],
    // Adicione mais pontos conforme necessário
  ];
  return (
    <>
      <Link to="/dashboard" className="fixed top-1 left-1 bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-700">
        Voltar para Dashboard
      </Link>
      <MapContainer center={centro} zoom={12} scrollWheelZoom={false} style={{ height: "calc(60vh - 40px)", width: "100%", marginTop: "40px" }}>
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> colaboradores'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CamadaMapaCalor pontos={pontos} />
      </MapContainer>
    </>
  );
};

export default ComponenteMapaCalor;
