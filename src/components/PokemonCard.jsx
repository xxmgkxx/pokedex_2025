import React from 'react';
// Compenente funcional que exibe as informações de um Pokemon.
// Recebe 'name', 'type', e 'image' como props
function PokemonCard(props) { 
  //Desestruturação: extrai props em variáveis individuais
  const { name, type, image } = props;

  return(
    <div className='pokemon-card'>
      {/* Exibindo o nome do pokemon */}
      <h3>{name}</h3>
      {/* Imagem do pokemon */}
      <img src={image} alt={name} width="100" height="100" />
      {/* Imagem do pokemon */}
      <p>Tipo: {type}</p>
    </div>
  )
}

export default PokemonCard;