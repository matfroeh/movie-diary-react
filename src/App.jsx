import React, { useState } from 'react';
import NavBar from './components/NavBar'; 
import FetchMovies from './components/FetchMovies';
import Journal from './components/Journal'; 
import MovieCard from './components/MovieCard';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showJournal, setShowJournal] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <>
      <NavBar query={query} setQuery={setQuery} showJournal={showJournal} setShowJournal={setShowJournal} />
      <div
        className="bg-indigo-600 bg-cover"
        style={{ backgroundImage: `url('./Background.svg')` }}
      >
        {showJournal ? (
          <Journal favorites={favorites} setFavorites={setFavorites} />
        ) : (
          <div
            className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 px-6 py-6"
            id="card-container"
          >
            <FetchMovies movies={movies} setMovies={setMovies} query={query} setFavorites={setFavorites} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
