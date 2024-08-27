// src/components/NavBar.jsx
const NavBar = ({ query, setQuery, showJournal, setShowJournal }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Implement search logic if needed
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex flex-col md:flex-row md:justify-between items-center">
      {/* Navigation Links */}
      <div className="flex space-x-4 mb-4 md:mb-0">
        <a
          href="#"
          onClick={() => setShowJournal(false)}
          className={`text-xl font-bold ${!showJournal ? 'text-indigo-400' : 'text-gray-400'} hover:text-indigo-300`}
        >
          Movie Diary
        </a>
        <a
          href="#"
          onClick={() => setShowJournal(true)}
          className={`text-lg ${showJournal ? 'text-indigo-400' : 'text-gray-400'} hover:text-indigo-300`}
        >
          Journal
        </a>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center space-x-2 w-full md:w-auto">
        <input
          name="queryInput"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input-bordered w-72 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        />
        <button
          type="submit"
          className="text-white bg-indigo-400 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;

