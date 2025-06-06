// src/components/PokemonList.jsx
import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);    // Lista de pokémons detalhados
  const [loading, setLoading] = useState(true);          // Estado de carregamento
  const [error, setError] = useState(null);              // Estado de erro (null = sem erro)

  useEffect(() => {
    // Função assíncrona para buscar os dados
    async function fetchPokemons() {
      try {
        // 1. Fetch da lista dos primeiros 20 pokémons
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        if (!response.ok) {
          throw new Error(`Erro ao buscar lista: ${response.status}`);
        }
        const data = await response.json();
        // data.results é um array de objetos { name, url }

        // 2. Para cada pokémon na lista, buscar detalhes
        const detailedPokemons = [];
        for (const item of data.results) {
          const res = await fetch(item.url);
          if (!res.ok) throw new Error(`Erro ao buscar detalhes de ${item.name}`);
          const details = await res.json();
          // Extrair dados relevantes: id, name, types, sprite
          detailedPokemons.push({
            id: details.id,
            name: details.name,
            types: details.types,  // array de tipos completo (objetos)
            image: details.sprites.front_default
          });
        }

        // 3. Atualizar estado com lista detalhada e marcar loading false
        setPokemonList(detailedPokemons);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    }

    fetchPokemons();
  }, []);  // [] => executa apenas na montagem do componente

  if (loading) {
    return <p>Carregando pokémons...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro: {error}</p>;
  }

  // Quando não está mais carregando e não houve erro, renderiza a lista
  return (
    <div className="pokemon-list">
      {pokemonList.map(poke => (
        <PokemonCard 
          key={poke.id}
          name={poke.name}
          type={
            // Se o pokémon tiver múltiplos tipos, juntamos eles em uma string
            poke.types.map(t => t.type.name).join(' / ')
          }
          image={poke.image}
        />
      ))}
    </div>
  );
}

export default PokemonList;