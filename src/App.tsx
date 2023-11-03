import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonPage from './views/pages/pokemon/Pokemon';
import NotFoundPage from './views/pages/not-found/NotFound';
import './styles';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokemonPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
