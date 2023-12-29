import PropTypes from "prop-types";
import { useEffect, useState } from "react"
import ToggleButton from "./ToggleButton"
import Rating from "./Rating.jsx";
import ImdbLogo from "../assets/imdb.png"
import BackButton from "../assets/arrow-left.png"
import Loading from "./Loading"

MovieInfo.propTypes = {
  selectedMovie: PropTypes.object,
  setSelectedMovie: PropTypes.func,
  handleAddToList: PropTypes.func
}

function MovieInfo({ selectedMovie, setSelectedMovie, handleAddToList }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedStar, setSelectedStar] = useState(-1);
  const [currentMovie, setCurrentMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      setIsLoading(true)
      await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}&i=${selectedMovie.imdbID}`)
      .then(response => response.json())
      .then(data => setCurrentMovie(data))
      .finally(() => setIsLoading(false))
    }
    fetchMovie()
  }, [selectedMovie])

  const addMovieToList = () => {
    handleAddToList({...selectedMovie, ...currentMovie}, selectedStar+1)
    setSelectedMovie(null)
  }

  useEffect(() => {
    if (currentMovie) document.title = `Movie | ${currentMovie.Title}`

    return () => {
      document.title = 'usePopcorn'
    }
  },[currentMovie])

  return (
    <>
      <div className="w-full flex-1 bg-[#222831] rounded-md relative scrollable-container">
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
          isLoading ? <Loading /> 
          : 
          isOpen && currentMovie &&
          <div className="body flex flex-col items-center gap-y-[20px] p-[16px]">
            <div className="flex flex-col items-center gap-y-[20px] rating p-[20px] bg-[#393E46] w-full rounded-md ">
              <Rating selectedStar={selectedStar} setSelectedStar={setSelectedStar} />
              <button onClick={() => addMovieToList()} className="bg-[#5D5FEF] w-full max-w-[150px] rounded-[50px] px-[16px] py-[8px] hover:bg-[#4a4cbf] shadow-box">+Add to list</button>
            </div>
            <div className="movie-info flex flex-col items-start gap-y-[20px] w-full">
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