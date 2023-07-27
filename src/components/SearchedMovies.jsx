import ImdbLogo from "../assets/imdb.png"
import MovieCard from "./MovieCard"

function SearchedMovies() {
  return (
    <>
      <div className="w-full max-w-lg bg-[#222831] rounded-md relative">
        <svg
        className="w-[20px] h-[20px] absolute top-3 right-3 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
            <path d="M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
        <div className="header bg-[#393E46] px-[16px] pt-[40px] pb-[16px]">
          <h6 className="mb-[8px]">MOVIES LIST</h6>
        </div>
        <div className="body">
          <MovieCard>
            <span className="imdb-rating"><img className="h-[32px] inline" src={ImdbLogo} alt="imdb-logo"></img> 9</span>
            <span className="your-rating">🌟 8</span>
            <span className="movie-time">⏳ 125min</span>
          </MovieCard>
          <MovieCard>
            <span className="imdb-rating"><img className="h-[32px] inline" src={ImdbLogo} alt="imdb-logo"></img> 9</span>
            <span className="your-rating">🌟 8</span>
            <span className="movie-time">⏳ 125min</span>
          </MovieCard>
          <MovieCard>
            <span className="imdb-rating"><img className="h-[32px] inline" src={ImdbLogo} alt="imdb-logo"></img> 9</span>
            <span className="your-rating">🌟 8</span>
            <span className="movie-time">⏳ 125min</span>
          </MovieCard>
        </div>
      </div>
    </>
  )
}

export default SearchedMovies