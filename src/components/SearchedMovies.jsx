import { useState } from "react"
import PropTypes from "prop-types";

import ToggleButton from "./ToggleButton"

SearchedMovies.propTypes = {
    children: PropTypes.node
}

function SearchedMovies({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="w-full max-w-lg bg-[#222831] rounded-md relative">
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="header bg-[#393E46] px-[16px] pt-[45px] pb-[16px]">
          <h6 className="mb-[8px]">MOVIES LIST</h6>
        </div>
        {
          isOpen && <div className="body">
          {children}
        </div>
        }
      </div>
    </>
  )
}

export default SearchedMovies