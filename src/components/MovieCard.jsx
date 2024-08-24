const MovieCard = ({ movie }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative max-w-44">
          {/* <button
            onClick={onFavoriteToggle}
            className="absolute fill-current top-2 right-0.5 text-yellow-400 p-6 hover:text-yellow-500"
            style={{
              backgroundImage: isFavorite
                ? "url('./resources/icons8-stern-48-full.png')"
                : "url('./resources/icons8-stern-48.png')",
            }}
          /> */}
          <img
            className="object-scale-down w-full"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`Image of ${movie.title}`}
          />
          <div className="p-4">
            <h3 className="mb-2 font-semibold text-lg text-indigo-300">
              {movie.title}
            </h3>
            <p className="mb-4 text-indigo-200 text-sm mt-6">
              {movie.overview.length > 50
                ? `${movie.overview.substring(0, 50)}...`
                : movie.overview}
            </p>
          </div>
        </div>
      );
};

export default MovieCard;
