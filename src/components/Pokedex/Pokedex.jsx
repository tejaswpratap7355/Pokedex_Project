import { useState } from "react";
import PokedexList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

// CSS import
import './Pokedex.css';
import PokemonDetails from "../PokemonDetails.js/PokemonDetails";
// import PokemonDetails from "../PokemonDetails.js/PokemonDetails";

function Pokedex() {

    const [searchTerm, setSearchterm] = useState('');

    return (
        <div className="pokedex-wrapper">
            <Search updateSearchTerm={setSearchterm} />
        
            { (!searchTerm) ? <PokedexList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
    
        </div>
    )
}

export default Pokedex;