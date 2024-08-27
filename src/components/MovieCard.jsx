const MovieCard = ({ movie, favorites, setFavorites }) => {
  // const [isFavorite, setIsFavorite] = useState(false);
  // state "favorites" is passed down as a prop from App.jsx, no need to define it here
  // no need to define a state for "isFavorite" here: just check if the movie is in favorites when
  // rendering the component MovieCard for each movie of the array "movies" in FetchMovies.jsx

  // const [note, setNote] = useState("");
  // DO WE EVEN NEED A NOTE SECTION ON THE MAIN PAGE? IF YES, THE NOTES-STATE WOULD BE BETTER SUITED TO BE
  // DEFINED IN APP.JSX - I commented it all out here for now

  // Check if the movie is in favorites for determining the type of the add-to-favorite-button
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  // why useEffect and why is it triggered when movie.id changes, which is just a constant property?
  // useEffect(() => {
  //   // Check if the movie is in favorites
  //   // const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // THE CODE "setIsFavorite" BELOW WILL RE-RENDER THE PAGE EVERY TIME WHILE
  // IT ITERATES THROUGH THE FAVORITES ARRAY (because setFunctions trigger a re-render) => Too many re-renders Error from react

  // setIsFavorite(favorites.some(fav => fav.id === movie.id));
  // }, [movie.id]);

  const toggleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);

    // setIsFavorite(!isFavorite);
    // not necessary anymore and the now used constant isFavorite does not need to be updated
    // because it is only used to determine the color of the favorite button right at rendering the component

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // const handleNoteChange = (e) => {
  //   setNote(e.target.value);
  // };

  // const handleNoteSubmit = (e) => {
  //   e.preventDefault();
  //   let notes = JSON.parse(localStorage.getItem("movieNotes")) || {};
  //   notes[movie.id] = note;
  //   localStorage.setItem("movieNotes", JSON.stringify(notes));
  //   setNote(""); // Clear the input field
  // };

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
        <h3 className="mb-2 font-semibold text-lg text-indigo-300">
          {movie.title}
        </h3>
        <p className="mb-4 text-indigo-200 text-sm">
          {movie.overview.length > 50
            ? `${movie.overview.substring(0, 50)}...`
            : movie.overview}
        </p>

        {/* DO WE NEED A NOTE SECTION ON THE MAIN PAGE? IF YES, THE NOTES-STATE WOULD BE BETTER SUITED TO BE 
DEFINED IN APP.JSX */}

        {/* Note Section
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
        </form> */}
      </div>
    </div>
  );
};

export default MovieCard;
