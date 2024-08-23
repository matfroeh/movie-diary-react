import { useState } from "react";
import FetchMovies from "./components/FetchMovies";

function App() {
  // State to hold the movies fetched from the FetchMovies component
  const [movies, setMovies] = useState([]);

  return (
    <>
      <div>
        {/* <NavBar /> */}
        {/* <SearchBar /> */}
        <div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
          id="card-container"
        >
          <FetchMovies movies={movies} setMovies={setMovies} />
        </div>
      </div>
    </>
  );
}

export default App;
