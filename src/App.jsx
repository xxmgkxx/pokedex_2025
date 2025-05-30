import './App.css'
import PokemonCard from './components/PokemonCard'
import Header from './components/Header'
import { useState } from 'react';
// npm create vite@latest nome_projeto -- --template react
// npm install
// npm run dev

//Desafio:
/*
Instruções:
	1.	No App.jsx, use o hook useState para guardar a lista de pokémons. Inicialize-o com o array estático existente. Por exemplo: const [pokemons, setPokemons] = useState([...listaInicial]);.
	2.	Implemente uma função para adicionar um Pokémon. Você pode criar um objeto de Pokémon novo (por exemplo, um Pokémon fictício ou um dos não listado ainda). Use setPokemons para atualizar a lista adicionando esse novo objeto.
	•	Dica: Para adicionar em um array imutavelmente, você pode usar o operador spread: setPokemons([...pokemons, novoPokemon]). Isso cria um novo array contendo os antigos e o novo.
	3.	Adicione um <button> na renderização do App, abaixo ou acima da lista, com texto “Adicionar Pokémon”. No onClick desse botão, chame a função criada para inserir o novo Pokémon.
	4.	Verifique no navegador: ao clicar no botão, o novo Pokémon deve aparecer na lista. Cada clique adiciona de novo (podem aparecer duplicados, não se preocupe com unicidade agora, é só para ver o estado mudando).
*/

// https://github.com/xxmgkxx/pokedex_2025
function App() {
  //Lista de Pokemon estática para demonstração inicial
  const [pokemons, setPokemons] = useState([
    { id: 1, name: 'Bulbasaur', type: 'Grass/Poison', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 4, name: 'Charmander', type: 'Fire', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 7, name: 'Squirtle', type: 'Water', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' }
  ]);

  {/* 
    Criamos uma constante newPokemon com os dados 
    do Pikachu.
  */} 
  const newPokemon = {
    id: 25,
    name: 'Pikachu',
    type: 'Eletric',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  }
  {/* 
    Definimos a função addPokemon que usa setPokemons
    com uma arrow function:
      preList => [...prevList, newPokemon]
    Aqui usamos o valor anterior da lista (prevList) e
    retornamos um novo array contendo todos os elementos
    anteriores e mais o newPokemon.
    Isso não 'muta' o array original, mas cria um novo,
    como o React exige.
    */}
  const addPokemon = () => {
    setPokemons(prevList => [...prevList, newPokemon]);
  };

  return (
    <div className='app'>
      <Header title="Pokedex" subtitle="Escolha o seu pokemon"/>
      {/* 
        Adicionamos um <button onClick={addPokemon}>
        Quando clicado, chama addPokemon e atualiza o
        estado.
      */}
      <button onClick={addPokemon}>Adicionar Pokémon</button>
      {/* 
        O .map para renderizar PokemonCard permanece igual,
        mas agora baseia-se no estado pokemons.
        Conforme pokemons muda, o componente re-renderiza
        e exibe a lista atualizada.
      */}
      <div className='pokemon-list'>
        {pokemons.map(poke => (
          <PokemonCard 
            key={poke.id}
            name={poke.name}
            type={poke.type}
            image={poke.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
