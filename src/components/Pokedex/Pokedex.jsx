import PokedexList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

// CSS import
import './Pokedex.css';

function Pokedex() {
    return (
        <div className="pokedex-wrapper">
            <Search />
            <PokedexList/>
        </div>
    )
}

export default Pokedex;