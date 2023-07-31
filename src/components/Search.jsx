import { useState } from "react"

function Search() {
  const [query, setQuery] = useState('');

  return (
    <>
      <input
        className="movie-search p-[6px] rounded-md shadow-md bg-[#5C469C]"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} />
    </>
  )
}

export default Search