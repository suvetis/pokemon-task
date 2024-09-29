import Image from 'next/image';
import React from 'react';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListProps {
  fetchData: () => Promise<Pokemon[]>;
}

const getPokemonNumberFromUrl = (url: string): string | null => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : null;
};

const PokemonList = async ({ fetchData }: PokemonListProps) => {
  const pokemons = await fetchData();

  return (
    <div className="flex justify-center flex-wrap border-2 border-red-200">
      {pokemons.map((pokemon: Pokemon) => {
        const pokemonNumber = getPokemonNumberFromUrl(pokemon.url);

        return (
          <div key={pokemon.name}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonNumber}.png`}
              width={220}
              height={220}
              alt="pokemon image"
              className="z-[9999]"
            />
            <span>{pokemon.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
