import PokemonList from '@/components/PokemonList';
import React from 'react';
import SearchResultList from '@/components/SearchResultList';
import { Suspense } from 'react';
import Header from './Header';
import { SplineIcon } from 'lucide-react';
import Spinner from '@/components/Spinner';

export type ParamType = {
  [key: string]: string | string[] | undefined;
};

const BrowsePage = async ({ params, searchParams }: { params: { page: string }; searchParams?: ParamType }) => {
  const { page } = params;
  const searchTerm = (searchParams?.searchTerm as string) || '';

  async function fetchPokemons(page: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${Number(page) * 24}`);
    const pokemons = await response.json();
    return pokemons.results;
  }

  return (
    <main className="flex flex-col h-screen">
      <Header page={page} searchTerm={searchTerm} />
      <div className="flex-grow">
        <Suspense fallback={<Spinner />}>
          {searchTerm ? <SearchResultList searchTerm={searchTerm} /> : <PokemonList fetchData={() => fetchPokemons(page)} />}
        </Suspense>
      </div>
    </main>
  );
};

export default BrowsePage;
