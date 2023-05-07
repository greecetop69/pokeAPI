import { useEffect } from 'react';
import { useRootStore } from '../mst/store/RootStore';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { fetchData } from '@features/pokedex';

const PokeCards = observer(() => {
  const { pokemons, fetchDataHome } = useRootStore();

  useEffect(() => {
    fetchDataHome(fetchData);
  }, [fetchDataHome]);

  return (
    <div className="flex flex-wrap justify-center">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.key}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4"
        >
          <Link to={`/detail/${pokemon.key}`}>
            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden h-full">
              <div className="flex items-center justify-center">
                <img
                  src={pokemon.sprite}
                  alt="sprite"
                  className="p-4 w-48 h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-base font-medium">{pokemon.key}</div>
                <div className="flex flex-wrap mt-2">
                  {pokemon.types.map((type) => (
                    <div key={type?.name} className="mr-2 mb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
                        {type?.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
});

export default PokeCards;
