import './App.css'
import PokemonCard from './components/PokemonCard'
import Header from './components/Header'
// npm create vite@latest nome_projeto -- --template react
// npm install
// npm run dev

//Desafio:
/*
  1.Crie um novo componente de cabeçalho chamado
    Header que receba um prop title e exiba este
    título dentro de um <h1>. Utilize esse componente
    na sua aplicação para mostrar o título da Pokedex
  2.Adicione mais 10 pokemons na sua lista de pokemons
    para pegar as imagens, olhe em pokeapi.co
*/

// https://github.com/xxmgkxx/pokedex_2025
function App() {
  //Lista de Pokemon estática para demonstração inicial
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
    { id: 4, name: "Charmader", type: "Fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
    { id: 7, name: "Squirtle", type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"}
  ]

  return (
    <div className='app'>
      <Header title="Pokedex" subtitle="Escolha o seu pokemon"/>
      {/* 
        Mapeando a lista de pokemons para renderizar um PokemonCard 
        para cada um
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
