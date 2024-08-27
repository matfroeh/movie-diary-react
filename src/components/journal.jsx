import { useState } from "react";
import MovieCard from "./MovieCard";

const Journal = ({ favorites, setFavorites }) => {
  const [notes, setNotes] = useState({});

  const handleNoteChange = (id, note) => {
    setNotes({
      ...notes,
      [id]: note
    });
  };

  const handleNoteSubmit = (id) => {
    setFavorites(favorites.map(movie =>
      movie.id === id ? { ...movie, note: notes[id] || "" } : movie
    ));
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(movie => movie.id !== id));
    // Also clear note for removed movie
    const updatedNotes = { ...notes };
    delete updatedNotes[id];
    setNotes(updatedNotes);
  };

  return (
    <div className="container p-6">
      <h2 className="text-2xl font-bold mb-4">Favorites Journal</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {favorites.map(movie => (
          <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4">
            <MovieCard movie={movie} favorites={favorites} setFavorites={setFavorites}/>
            <textarea
              value={notes[movie.id] || ""}
              onChange={(e) => handleNoteChange(movie.id, e.target.value)}
              placeholder="Add notes here..."
              className="w-full p-2 mt-2 border rounded"
            />
            <button
              onClick={() => handleNoteSubmit(movie.id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Note
            </button>
            <button
              onClick={() => removeFromFavorites(movie.id)}
              className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
