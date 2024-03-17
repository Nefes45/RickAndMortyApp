

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';
import CharacterCard from '../components/CharacterCard';

const HomePage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching episodes:', error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      <h1>Rick and Morty Episodes</h1>
      {episodes.map(episode => (
        <div key={episode.id}>
          <h2 onClick={() => fetchCharacters(episode)}>{episode.name}</h2>
          <p>{episode.air_date}</p>
          <p>{episode.episode}</p>
        </div>
      ))}
      <Pagination currentPage={currentPage} totalPages={episodes.info ? episodes.info.pages : 1} onPageChange={handlePageChange} />
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
