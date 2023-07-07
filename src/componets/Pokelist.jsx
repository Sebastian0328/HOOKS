import React, { useEffect, useState } from 'react';
import { Pokecart } from './Pokecart';

export const Pokelist = () => {
    const [pokemon, setPokemon] = useState([]);
    const [suma, setSuma] = useState(20)

    const getdataNew = async (url ) => {
        console.log('ASDASDASDASD');
        const response = await fetch(url)
        const data = await response.json();
        const pokemonPromises = await Promise.all(
            data.results.map(async (pokemon) => {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                return data
            })
        )
        console.log(pokemonPromises);
        setPokemon((prev) => [...prev, ...pokemonPromises])

    }
    useEffect(() => {
       getdataNew('https://pokeapi.co/api/v2/pokemon')

    }, []);

    const moreClick = () => {
        setSuma(prev =>
            prev += 10
        )
        console.log(suma);
        getdataNew(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${suma}`)
    }

    const handleDelete = (name) => {
        const updatedPokemon = pokemon.filter((pokemon) => pokemon.name !== name);
        setPokemon(updatedPokemon);
    };
    return (
        <>
            <div>
                <button onClick={moreClick}  >Give me more!</button>
            </div>
            <div className='containerpokemons' >
                {
                    pokemon.sort((a, b) => b.id - a.id).map((pokemon,i) => (
                        <Pokecart key={i} id={pokemon.id} name={pokemon.name} img={pokemon.sprites.front_shiny} handleDelete={handleDelete} />
                    ))
                }

            </div>
        </>
    );
};