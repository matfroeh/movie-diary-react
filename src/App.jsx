import { useState } from "react";
import FetchMovies from "./components/FetchMovies";
import SearchBar from "./components/SearchBar";

function App() {
  // State to hold the movies fetched from the FetchMovies component
  const [movies, setMovies] = useState([]);
  // State to hold the query string from the SearchBar component
  const [query, setQuery] = useState("");

  return (
    <>
      <div
        className="bg-indigo-600 bg-cover"
        style={{ backgroundImage: `url('./Background.svg')` }}
      >
        {/* <NavBar /> */}
        <SearchBar query={query} setQuery={setQuery} />
        <div
          className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 px-6 py-6"
          id="card-container"
        >
          <FetchMovies movies={movies} setMovies={setMovies} query={query} />
        </div>
      </div>
    </>
  );
}

export default App;
