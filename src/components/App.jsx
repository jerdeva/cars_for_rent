import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { CatalogPage } from './pages/Catalog/Catalog';
import { FavoritePage } from './pages/Favorite/Favorite';


export const App = () => {
  return (
<Routes>
      <Route
        path="/" element={<HomePage />}/>
        <Route
          path="/catalog"
          element={<CatalogPage/>
          }
        />
        <Route
          path="/favorites"
          element={<FavoritePage/>
          }
        />
    </Routes>
  );
};
