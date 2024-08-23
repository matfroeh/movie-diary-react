import { useEffect } from "react";
import MovieCard from "./MovieCard";

// FetchMovies component that sets the movies state handled down from App
const FetchMovies = ({ movies, setMovies }) => {
  const apiKey = "434cdc6115c1cdc4355e3178cc63535a";

  useEffect(() => {
    let ignore = false;
    // Query needs to be adapted to switch between the different kinds of movie lists that should be fetched
    const getMovies = async (query = "") => {
      try {
        const url = query
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Set the movies state. Need to check data format
        if (!ignore) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    // Finally, call function
    getMovies();

    // Clean up
    return () => {
      ignore = true;
    };
  }, []); // Dependency to be adapted later if necessary

  // Create the MovieCards
  return movies.map((movie) => {
    return (
        <MovieCard key={movie.id} movie={movie} />
    );
  });
};

export default FetchMovies;
