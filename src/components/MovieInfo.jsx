import PropTypes from "prop-types";
import { useEffect, useState } from "react"
import ToggleButton from "./ToggleButton"
import Rating from "./Rating.jsx";
import ImdbLogo from "../assets/imdb.png"
import BackButton from "../assets/arrow-left.png"

MovieInfo.propTypes = {
  selectedMovie: PropTypes.object,
  setSelectedMovie: PropTypes.func,
  handleAddToList: PropTypes.func
}

function MovieInfo({ selectedMovie, setSelectedMovie, handleAddToList }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedStar, setSelectedStar] = useState(-1);
  const [currentMovie, setCurrentMovie] = useState();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}&i=${selectedMovie.imdbID}`)
    .then(response => response.json())
    .then(data => setCurrentMovie(data))
  }, [selectedMovie])

  return (
    <>
      <div className="w-full max-w-lg bg-[#222831] rounded-md relative">
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <img onClick={() => setSelectedMovie(null)} className="h-[30px] absolute top-2 left-2 cursor-pointer" src={BackButton} alt="back-button" />
        <div className="header flex gap-x-[10px] bg-[#393E46] pt-[45px]">
          <img className="h-[200px]" src={selectedMovie.Poster} alt="back-to-the-future" />
          <div className="flex flex-col gap-y-[10px]">
            <span className="text-[24px] font-bold">{selectedMovie.Title}</span>
            <span>{selectedMovie?.Year} • {currentMovie?.Runtime}</span>
            <span>{currentMovie?.Genre}</span>
            <span className="imdb-rating"><img className="h-[32px] inline" src={ImdbLogo} alt="imdb-logo"></img> {currentMovie?.imdbRating} IMDb rating</span>
          </div>
        </div>
        {
          isOpen && currentMovie && <div className="body flex flex-col items-center gap-y-[20px] pb-[20px]">
          <div className="flex flex-col items-center gap-y-[20px] rating p-[20px] bg-[#393E46] mt-[16px] w-full max-w-[323px] rounded-md">
            <Rating selectedStar={selectedStar} setSelectedStar={setSelectedStar} />
            <button onClick={() => handleAddToList(selectedMovie, selectedStar+1)} className="bg-[#533483] w-full max-w-[150px] rounded-[50px] px-[16px] py-[8px]">+Add to list</button>
          </div>
          <div className="movie-info flex flex-col items-start gap-y-[20px] w-full max-w-[323px]">
            <span className="text-[16px]">{currentMovie.Plot}</span>
            <span className="text-[16px]">Starring {currentMovie.Actors}</span>
            <span className="text-[16px]">Directed by {currentMovie.Director}</span>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default MovieInfo