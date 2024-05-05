import { Link } from "react-router-dom";
import "./Pokemons.css";

function Pokemons({ name, image, id }) {
  return (
    <div className="pokemons">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon-name">{name}</div>
        <div>
          <img className="pokemon-image" src={image} />
        </div>
      </Link>
    </div>
  );
}

export default Pokemons;
