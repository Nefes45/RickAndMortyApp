

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadFavoriteCharacters } from './redux/favoriteCharactersSlice';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EpisodeDetailPage from './pages/EpisodeDetailPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import FavoriteCharactersPage from './pages/FavoriteCharactersPage';

const App = () => {
  const dispatch = useDispatch();

  // Favori karakterleri yükleme
  useEffect(() => {
    dispatch(loadFavoriteCharacters());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/episode/:id" component={EpisodeDetailPage} />
          <Route path="/character/:id" component={CharacterDetailPage} />
          <Route path="/favorites" component={FavoriteCharactersPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
