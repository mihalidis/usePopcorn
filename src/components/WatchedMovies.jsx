import ImdbLogo from "../assets/imdb.png"
import MovieCard from "./MovieCard"
import { calculateAverage } from "../helper"
import { useState } from "react"
import ToggleButton from "./ToggleButton"

function WatchedMovies({ watchedMovies }) {
  const [isOpen, setIsOpen] = useState(true);

  const watchedMoviesCount = watchedMovies.length;
  const averageImdbRating = calculateAverage(watchedMovies, 'imdbRating');
  const averageUserRating = calculateAverage(watchedMovies, 'userRating');
  const averageMovieTime = calculateAverage(watchedMovies, 'runtime');

  return (
    <>
      <div className="w-full max-w-lg bg-[#222831] rounded-md relative">
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="header bg-[#393E46] px-[16px] pt-[45px] pb-[16px]">
          <h6 className="mb-[8px]">MOVIES YOU WATCHED</h6>
          <div className="ratings flex justify-between items-center">
            <span className="watched-movie">🎞️ {watchedMoviesCount || '-'} Movies</span>
            <span className="imdb-rating"><img className="h-[32px] inline" src={ImdbLogo} alt="imdb-logo"></img> {averageImdbRating}</span>
            <span className="your-rating">🌟 {averageUserRating}</span>
            <span className="movie-time">⏳ {averageMovieTime}min</span>
          </div>
        </div>
        {
          isOpen && <div className="body">
          {
              watchedMovies && watchedMovies.map(movie => (
                <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster}>
                  <span className="imdb-rating"><img className="h-[32px] inline" src={ImdbLogo} alt="imdb-logo"></img> {movie.imdbRating}</span>
                  <span className="your-rating">🌟 {movie.userRating}</span>
                  <span className="movie-time">⏳ {movie.runtime}min</span>
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