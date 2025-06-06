// src/App.jsx
import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

/*
  Com os dados reais carregados, nossa Pokédex está funcional! Vamos para um desafio para consolidar o uso de hooks e manipulação de estado:
    •	Desafio: Exibir também o número de Pokédex (ID) de cada Pokémon no card, ao lado do nome, usando os dados carregados da API.

  Atualmente, PokemonCard mostra somente o nome, mas podemos acrescentar o ID (por exemplo: #1 Bulbasaur). O ID já está disponível em nossos dados (poke.id). Precisaremos:
    1.	Passar o ID do Pokémon como prop para o PokemonCard.
    2.	Atualizar o componente PokemonCard para exibir o ID junto do nome.
  Dicas:
	•	Podemos formatar o ID com um # na frente, ou mesmo preencher zeros à esquerda se quisermos (não obrigatório, mas #001 fica clássico).
	•	Lembre de adicionar a prop no lugar certo tanto no mapeamento em PokemonList quanto no componente PokemonCard.
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