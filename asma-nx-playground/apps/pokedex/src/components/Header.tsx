import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h2 className="text-5xl font-medium p-4 text-gray-500">Pokédex </h2>;
      </Link>
    </div>
  );
};

export default Header;
