// src/App.jsx
import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

/*
  GIT: https://github.com/xxmgkxx/pokedex_2025
  Desafio final: Implemente uma funcionalidade de "Carregar Mais"
  pokemons. Por exemplo, carregar mais 20 quando o usuário
  clicar em um botão "Carregar Mais".

  Dicas para implementação:
  - Mantenha um estado para limit ou offset e utilize na
    URL da API (?limit=20&offset=20 para os próximos 20)
  - Você pode reutilizar a função fetch ou usar um segundo
    useEffect dependente de uma variável de página.
  - Ao carregar mais, você deve concatenar os novos resultados
    aos já existentes (setPokemList(prev => [...prev,...novos])).
  - Lembre de tratar o caso de não haver mais pokémons 
    (a API tem um total fixo).
  Esse desafio envolve pensar no ciclo completo: eventos,
  atualização de estado que dispara efeito, e atualizar
  lista - Combinando useState e useEffect de forma dinâmica.
*/
function App() {
  return (
    <div className="app">
      <Header title="Pokédex" />
      <PokemonList />
    </div>
  );
}

export default App;