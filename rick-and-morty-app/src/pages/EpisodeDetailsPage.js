

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const EpisodeDetailsPage = ({ match }) => {
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/${match.params.id}`)
      .then(response => {
        setEpisode(response.data);
        fetchCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching episode details:', error);
      });
  }, [match.params.id]);

  const fetchCharacters = (episode) => {
    axios.get(episode.characters)
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error(`Error fetching characters for episode ${episode.id}:`, error);
      });
  };

  return (
    <div>
      {episode && (
        <div>
          <h2>{episode.name}</h2>
          <p>{episode.air_date}</p>
          <p>{episode.episode}</p>
        </div>
      )}
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeDetailsPage;
