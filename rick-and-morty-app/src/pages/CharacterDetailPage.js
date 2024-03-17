

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterDetails();
  }, []);

  const fetchCharacterDetails = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(response.data);
    } catch (error) {
      console.error('Error fetching character details:', error);
    }
  };

  return (
    <div>
      {character && (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Type: {character.type}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetailPage;
