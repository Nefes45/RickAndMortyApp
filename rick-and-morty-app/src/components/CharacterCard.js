

import React from 'react';

const CharacterCard = ({ character, onFavoriteToggle }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <button onClick={() => onFavoriteToggle(character)}>
        {character.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default CharacterCard;
