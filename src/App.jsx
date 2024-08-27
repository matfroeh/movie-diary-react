import { useState } from "react";
import NavBar from "./components/NavBar";
import FetchMovies from "./components/FetchMovies";
import Journal from "./components/Journal";

const App = () => {
  const [movies, setMovies] = useState([]);
  // the state "favorites" is now defined in App.jsx as it is needed both 
  // in "Journal" and "FetchMovies" and now passed down as a prop to both components
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [showJournal, setShowJournal] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <NavBar
        query={query}
        setQuery={setQuery}
        showJournal={showJournal}
        setShowJournal={setShowJournal}
      />
      <div
        className="bg-indigo-600 bg-cover"
        style={{ backgroundImage: `url('./Background.svg')` }}
      >
        {showJournal ? (
          <Journal favorites={favorites} setFavorites={setFavorites} />
        ) : (
          <div
            className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 px-6 py-6"
            id="card-container"
          >
            <FetchMovies
              movies={movies}
              setMovies={setMovies}
              query={query}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
