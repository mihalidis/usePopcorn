import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types";
let typingTimer

Search.prototype = {
  handleSearchResults: PropTypes.func
}

function Search({ handleSearchResults }) {
  const inputSearch = useRef(null)
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

  useEffect(() => {
    function callback (e) {
      if (document.activeElement === inputSearch.current) return;
      if (e.code === 'Enter') {
        inputSearch.current.focus()
        setQuery('')
      }
    }

    document.addEventListener('keydown', callback)

    return () => document.addEventListener('keydown', callback)
  }, [setQuery])

  return (
    <>
      <input
        ref={inputSearch}
        className="movie-search p-[6px] rounded-md bg-[#5456d7] shadow-box custom-input"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => handleInputChange(e)} />
    </>
  )
}

export default Search