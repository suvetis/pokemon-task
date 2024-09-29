import React from 'react';
import PokemonList, { Pokemon } from './PokemonList';

const SearchResultList = async ({ searchTerm }: { searchTerm: string }) => {
  async function fetchPokemons() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`, { cache: 'force-cache' });
    const pokemons = await response.json();

    return pokemons.results.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
  }

  return <PokemonList fetchData={fetchPokemons} />;
};

export default SearchResultList;
