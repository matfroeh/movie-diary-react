import React, { useState, useEffect } from "react";

const MovieCard = ({ movie, favorites, setFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    // Check if the movie is in favorites
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(savedFavorites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    let notes = JSON.parse(localStorage.getItem("movieNotes")) || {};
    notes[movie.id] = note;
    localStorage.setItem("movieNotes", JSON.stringify(notes));
    setNote(""); // Clear the input field
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative max-w-xs mx-auto">
      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-2 right-2 p-2 rounded-full ${
          isFavorite ? "bg-yellow-500" : "bg-gray-700"
        } hover:bg-yellow-600 transition-colors duration-300`}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 6.756a3.002 3.002 0 00-2.12 2.12A3.002 3.002 0 005.121 11.002L12 17.88l6.879-6.878a3.002 3.002 0 00-2.121-2.12 3.002 3.002 0 00-2.12 2.121L12 13.717l-2.758-2.758a3.002 3.002 0 00-2.121-2.121z"
          />
        </svg>
      </button>

      <img
        className="object-cover w-full h-48"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`Image of ${movie.title}`}
      />
      <div className="p-4">
        <h3 className="mb-2 font-semibold text-lg text-indigo-300">{movie.title}</h3>
        <p className="mb-4 text-indigo-200 text-sm">
          {movie.overview.length > 50
            ? `${movie.overview.substring(0, 50)}...`
            : movie.overview}
        </p>

        {/* Note Section */}
        <form onSubmit={handleNoteSubmit} className="mt-4">
          <textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Add a note..."
            className="w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          />
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
          >
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieCard;
