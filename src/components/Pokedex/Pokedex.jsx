import PokedexList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

// CSS import
import './Pokedex.css';

function Pokedex() {
    return (
        <div className="pokedex-wrapper">
            <h1 id="pokedex-heading">Pokedex</h1>
            <Search />
            <PokedexList/>
        </div>
    )
}

export default Pokedex;