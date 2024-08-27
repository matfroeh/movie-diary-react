
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const FetchMovies = ({ movies, setMovies, query, favorites, setFavorites }) => {
  
  const apiKey = "434cdc6115c1cdc4355e3178cc63535a";
  // const [favorites, setFavorites] = useState(
  //   JSON.parse(localStorage.getItem("favorites")) || []
  // );

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

  // const toggleFavorite = (movie) => {
  //   const updatedFavorites = favorites.some((fav) => fav.id === movie.id)
  //     ? favorites.filter((fav) => fav.id !== movie.id)
  //     : [...favorites, movie];

  //   setFavorites(updatedFavorites);
  //   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  // };

  return movies.map((movie) => {
    // const isFavorite = favorites.some((fav) => fav.id === movie.id);
    return (
      <MovieCard
        key={movie.id}       
        movie={movie}
        // isFavorite={isFavorite}
        // toggleFavorite={toggleFavorite}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    );
  });
};

export default FetchMovies;
