import Search from "./Search"
import PropTypes from "prop-types";

Header.propTypes = {
  handleSearchResults: PropTypes.array,
  searchResultCount: PropTypes.number
}

function Header({ handleSearchResults, searchResultCount }) {
  return (
    <>
      <div className="flex items-center justify-between w-full p-[20px] bg-[#533483] rounded-md mt-[20px]">
        <span className="title font-bold text-[22px]">🍿 usePopcorn</span>
        <Search handleSearchResults={handleSearchResults} />
        {searchResultCount > 0 ? <span>Found {searchResultCount} results</span> : <span>No Result Found</span>}
      </div>
    </>
  )
}

export default Header