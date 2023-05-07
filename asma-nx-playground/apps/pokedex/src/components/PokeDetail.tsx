import { fetchData } from '@features/pokedex';
import { useRootStore } from '../mst/store/RootStore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokeDetail = () => {
  const { key } = useParams<{ key: string }>();
  const { pokemonDetail, fetchDataDetail } = useRootStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDataDetail(`${key}`, fetchData)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [key, fetchDataDetail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">
        {pokemonDetail?.getPokemon?.key}
      </h2>
      <div className="flex items-center mb-4">
        <img
          className="w-20 h-20 mr-4"
          src={pokemonDetail?.getPokemon?.sprite}
          alt={pokemonDetail?.getPokemon?.key}
        />
        <div>
          <p className="text-gray-600 text-sm mb-1">
            {pokemonDetail?.getPokemon?.color} -{' '}
            {pokemonDetail?.getPokemon?.types
              .map((type) => type.name)
              .join(', ')}
          </p>
          <p className="text-gray-600 text-sm">
            Height: {pokemonDetail?.getPokemon?.height} m | Weight:{' '}
            {pokemonDetail?.getPokemon?.weight} kg
          </p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">Abilities</h3>
        {pokemonDetail?.getPokemon?.abilities.first ? (
          <>
            <p>{pokemonDetail?.getPokemon?.abilities.first.desc}</p>
            <p>Name: {pokemonDetail?.getPokemon?.abilities.first.key}</p>
          </>
        ) : (
          <p>No Abilities</p>
        )}
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">Base Stats</h3>
        <p className="text-gray-600">
          Attack: {pokemonDetail?.getPokemonByDexNumber?.baseStats?.attack}
        </p>
        <p className="text-gray-600">
          Defense: {pokemonDetail?.getPokemonByDexNumber?.baseStats?.defense}
        </p>
        <p className="text-gray-600">
          HP: {pokemonDetail?.getPokemonByDexNumber?.baseStats?.hp}
        </p>
        <p className="text-gray-600">
          Special Attack:{' '}
          {pokemonDetail?.getPokemonByDexNumber?.baseStats?.specialattack}
        </p>
        <p className="text-gray-600">
          Special Defense:{' '}
          {pokemonDetail?.getPokemonByDexNumber?.baseStats?.specialdefense}
        </p>
        <p className="text-gray-600">
          Speed: {pokemonDetail?.getPokemonByDexNumber?.baseStats?.speed}
        </p>
      </div>
    </div>
  );
};

export default PokeDetail;
