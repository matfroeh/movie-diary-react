import { useEffect } from "react";
import MovieCard from "./MovieCard";

const FetchMovies = ({ movies, setMovies, query, favorites, setFavorites }) => {
  const apiKey = "434cdc6115c1cdc4355e3178cc63535a";

  useEffect(() => {
    let ignore = false;
    const getMovies = async () => {
      try {
        const url = query
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (!ignore) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();

    return () => {
      ignore = true;
    };
  }, [query]);

  return movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    );
  });
};

export default FetchMovies;
