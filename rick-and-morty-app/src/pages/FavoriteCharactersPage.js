

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteCharacter } from '../redux/favoriteCharactersSlice';

const FavoriteCharactersPage = () => {
  const dispatch = useDispatch();
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters.characters);

  const handleRemoveCharacter = (characterId) => {
    const isConfirmed = window.confirm('Are you sure you want to remove this character from favorites?');
    if (isConfirmed) {
      dispatch(removeFavoriteCharacter(characterId));
    }
  };

  return (
    <div>
      <h1>Favorite Characters</h1>
      {favoriteCharacters.length === 0 ? (
        <p>No favorite characters yet.</p>
      ) : (
        <ul>
          {favoriteCharacters.map((character) => (
            <li key={character.id}>
              {character.name}
              <button onClick={() => handleRemoveCharacter(character.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteCharactersPage;

