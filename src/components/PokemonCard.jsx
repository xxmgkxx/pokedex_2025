// src/components/PokemonCard.jsx
import React, { useState } from 'react';

function PokemonCard({ name, type, image }) {
  // Define um estado local 'showInfo' para controlar exibição de detalhes
  const [showInfo, setShowInfo] = useState(false);

  // Função para alternar o estado showInfo
  const toggleInfo = () => {
    setShowInfo(prevShowInfo => !prevShowInfo);
  };

  return (
    <div className="pokemon-card">
      <h3>{name}</h3>
      <img src={image} alt={name} width="100" height="100" />
      
      {/* Botão para mostrar/ocultar detalhes */}
      <button onClick={toggleInfo}>
        { showInfo ? 'Esconder Detalhes' : 'Mostrar Detalhes' }
      </button>

      {/* Renderização condicional do tipo: aparece somente se showInfo for true */}
      {showInfo && (
        <p>Tipo: {type}</p>
      )}
    </div>
  );
}

export default PokemonCard;