// src/components/PokemonList.jsx
import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
//https://github.com/xxmgkxx/pokedex_2025
function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);    // Lista de pokémons detalhados
  const [loading, setLoading] = useState(true);          // Estado de carregamento
  const [error, setError] = useState(null);              // Estado de erro (null = sem erro)
  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    // Função assíncrona para buscar os dados
    async function fetchPokemons() {
      try {
        // 1. Fetch da lista dos primeiros 20 pokémons
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
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
            name: details.name.charAt(0).toUpperCase() + details.name.slice(1),
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

  // Derivar a lista filtrada com base no searchTerm e/ou tipo
  const filteredPokemonList = pokemonList.filter(poke =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Quando não está mais carregando e não houve erro, renderiza a lista
  return (
    <div className="pokemon-list-container">
      {/* Campo de busca por nome */}
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p>Carregando pokémons...</p>}
      {error && <p>Ocorreu um erro: {error}</p>}
      {!loading && !error && (
        <div className="pokemon-list">
          {filteredPokemonList.map(poke => (
            <PokemonCard 
              key={poke.id}
              id={poke.id}
              name={poke.name}
              type={poke.types.map(t => t.type.name).join(' / ')}
              image={poke.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PokemonList;