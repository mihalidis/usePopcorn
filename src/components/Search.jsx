import { useState } from "react"
let typingTimer

function Search({ handleSearchResults }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      performSearch(e.target.value);
    }, 500);
  }

  const performSearch = (search) => {
    handleSearchResults(search)
  }

  return (
    <>
      <input
        className="movie-search p-[6px] rounded-md shadow-md bg-[#5C469C]"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => handleInputChange(e)} />
    </>
  )
}

export default Search