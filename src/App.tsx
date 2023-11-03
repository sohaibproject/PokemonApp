import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from './views/components/loading/Loading';
const PokemonPage = lazy(() => import('./views/pages/pokemon/Pokemon'));
const NotFoundPage = lazy(() => import('./views/pages/not-found/NotFound'));
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<PokemonPage />} />

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
