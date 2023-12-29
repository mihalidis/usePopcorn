import { useState } from "react"
import PropTypes from "prop-types";

import MovieCard from "./MovieCard"
import ToggleButton from "./ToggleButton"

import { calculateAverage } from "../helper"
import ImdbLogo from "../assets/imdb.png"

WatchedMovies.propTypes = {
  watchedMovies: PropTypes.array,
  handleRemoveWatchedMovie: PropTypes.func
}

function WatchedMovies({ watchedMovies, handleRemoveWatchedMovie }) {
  const [isOpen, setIsOpen] = useState(true);

  const watchedMoviesCount = watchedMovies ? watchedMovies.length : 0;
  const averageImdbRating = calculateAverage(watchedMovies, 'imdbRating').toFixed(1);
  const averageUserRating = calculateAverage(watchedMovies, 'userRating').toFixed(1);

  return (
    <>
      <div className="w-full flex-1 bg-[#222831] rounded-md relative scrollable-container">
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="header bg-[#393E46] px-[16px] pt-[45px] pb-[16px]">
          <h6 className="mb-[8px]">MOVIES YOU WATCHED</h6>
          <div className="ratings flex gap-x-[16px] items-center">
            {watchedMoviesCount > 0 && <span className="watched-movie">🎞️ {watchedMoviesCount || '-'} Movies</span>}
            {averageImdbRating > 0 && <span className="imdb-rating"><img className="h-[32px] inline" src={ImdbLogo} alt="imdb-logo"></img> {averageImdbRating}</span>}
            {averageUserRating > 0 && <span className="your-rating">🌟 {averageUserRating}</span>}
          </div>
        </div>
        {
          isOpen && <div className="body">
          {
              watchedMovies && watchedMovies.map(movie => (
                <MovieCard key={movie.imdbID} movie={movie} title={movie.Title} poster={movie.Poster} removeButton={true} handleRemoveWatchedMovie={handleRemoveWatchedMovie}>
                  <span className="imdb-rating"><img className="h-[32px] inline" src={ImdbLogo} alt="imdb-logo"></img> {movie.imdbRating}</span>
                  <span className="your-rating">🌟 {movie.userRating}</span>
                  <span className="movie-time">⏳ {movie.Runtime}</span>
                </MovieCard>
              ))
            }
          </div>
        }
      </div>
    </>
  )
}

export default WatchedMovies