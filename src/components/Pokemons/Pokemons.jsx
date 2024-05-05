import './Pokemons.css';

function Pokemons({ name, image}) {
    return (
        <div className='pokemons'>
            <div className='pokemon-name'>{name}</div>
            <div><img className='pokemon-image' src={image} /></div>
        </div>
    )
}

export default Pokemons;