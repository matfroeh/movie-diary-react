const MovieCard = ({ movie, favorites, setFavorites }) => {

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const toggleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
        <h3 className="mb-2 font-semibold text-lg text-indigo-300">
          {movie.title}
        </h3>
        <p className="mb-4 text-indigo-200 text-sm">
          {movie.overview.length > 50
            ? `${movie.overview.substring(0, 50)}...`
            : movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
