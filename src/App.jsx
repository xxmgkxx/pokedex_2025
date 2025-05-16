import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  //Lista de Pokemon estática para demonstração inicial
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
    { id: 4, name: "Charmader", type: "Fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
    { id: 7, name: "Squirtle", type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"}
  ]

  return (
    <div className='app'>
      <h1>Pokedex</h1>
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
