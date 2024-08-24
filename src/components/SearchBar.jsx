const SearchBar = ({ query, setQuery }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    // setQuery("");
  };

  return (
    <div className="container p-6">
      <form onSubmit={handleSearch}>
        <input
          name="queryInput"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="input-bordered w-72 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        />
        <button type="submit" className="relative right-16 text-white bg-indigo-400 hover:bg-indigo-800 font-medium rounded-lg text-sm px-2 py-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
