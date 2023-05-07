import { observer } from 'mobx-react-lite';
import PokeCards from './PokeCards';
import { Input } from 'antd';

export const PokeComponent = observer(() => {
  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-48 flex items-center bg-Brown-500 px-48 flex justify-center justify-between font-flexo text-white">
        <div className="">
          <p className="py-3 text-3xl">Pokemon name</p>
          <Search
            className="w-80 rounded-md   bg-Orange-500 "
            placeholder="Search pokemon"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          <p className="w-96 py-3 text-md leading-tight ">
            Use the Advanced Search to explore Pokémon by type, weakness,
            Ability, and more!
          </p>
        </div>
        <div className="w-5/12 h-24  my-0 flex items-center px-5 rounded-md bg-green-500  text-2xl leading-tight">
          Search for a Pokémon by name or using its National Pokédex number.
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-7">
        <PokeCards />
      </div>
    </div>
  );
});

export default PokeComponent;
