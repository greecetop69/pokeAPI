import { FC } from 'react';
import { PokeComponent } from '../components/PokeComponent';
import { Route, Routes } from 'react-router-dom';
import PokeDetail from '../components/PokeDetail';
import Header from '../components/Header';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PokeComponent />} />
        <Route path="/detail/:key" element={<PokeDetail />} />
      </Routes>
    </>
  );
};

export default App;
