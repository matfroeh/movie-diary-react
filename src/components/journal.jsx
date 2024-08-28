import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Journal = ({ favorites, setFavorites }) => {
  const [notes, setNotes] = useState({});

  // initially set the notes state once by getting the saved note of each favorite movie item
  useEffect(() => {
    const savedNotes = {};
    favorites.map((fav) => {
      if (fav.note) savedNotes[fav.id] = fav.note;
    });

    setNotes(savedNotes);
  }, []);

  // does not work => infinity loop ==> work-around: see above with useEffect
  // favorites.map((fav) => {
  //   if (fav.note)

  //     // setNotes({ ...notes, [fav.id]: fav.note });
  //   }
  // });

  const handleNoteChange = (e) => {
    setNotes({
      ...notes,
      [e.target.name]: e.target.value,
    });
  };

  const handleNoteSubmit = (id, e) => {
    e.preventDefault();
    // Form should not be cleared as long as the note is not displayed somewhere else

    favorites.map((fav) => {
      if (fav.id === id) fav.note = notes[id];
    });

    setFavorites(favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // using map within setting states does not work very well and
    // gives errors when re-rendering the notes-textfield
    // setFavorites(
    //   favorites.map((movie) => {
    //     // movie.id === id ? { ...movie, note: notes[id] } : movie;
    //     // this does not work

    //     movie.id === id ? (movie.note = notes[id]) : movie;
    //     // so the note gets now saved in the movie object of the favorites list itself
    //     // but it also needs to be saved to localStorage, see below
    //   })
    // );
  };

    // does not work + localStorage needs to be updated
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
    // Also clear note for removed movie <= not necessary as they are saved in the favorites array
    const updatedNotes = { ...notes };
    delete updatedNotes[id];
    setNotes(updatedNotes);
  };

  return (
    <div className="container p-6">
      <h2 className="text-2xl font-bold mb-4">Favorites Journal</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {favorites.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4"
          >
            <MovieCard
              movie={movie}
              favorites={favorites}
              setFavorites={setFavorites}
            />
            <textarea
              name={movie.id}
              value={notes[movie.id]}
              onChange={handleNoteChange}
              placeholder="Add notes here..."
              className="w-full p-2 mt-2 border rounded"
            />
            <button
              onClick={(e) => handleNoteSubmit(movie.id, e)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Note
            </button>
            <button
              onClick={() => removeFromFavorites(movie.id)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
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
