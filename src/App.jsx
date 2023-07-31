import './App.css'
import { tempMovieData, tempWatchedData } from './helper'
import Header from './components/Header'
import SearchedMovies from './components/SearchedMovies'
import WatchedMovies from './components/WatchedMovies'
import MovieInfo from './components/MovieInfo'
import MovieCard from "./components/MovieCard"
import CalendarLogo from "./assets/calendar.png"
import { useState } from "react"

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <Header />
      <div className='flex justify-center mt-[16px] gap-x-[20px]'>
        <SearchedMovies searchedMovies={tempMovieData} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}>
          {
            tempMovieData && tempMovieData.map(item => (
              <MovieCard key={item.imdbID} movie={item} poster={item.Poster} title={item.Title} setSelectedMovie={setSelectedMovie}>
                <span className="imdb-rating flex items-center">
                  <img className="h-[20px] inline mr-[6px]" src={CalendarLogo} alt="imdb-logo"></img>
                  {item.Year}
                </span>
              </MovieCard>
            ))
          }
        </SearchedMovies>
        {
          selectedMovie ? <MovieInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} /> : <WatchedMovies watchedMovies={tempWatchedData} />
        }
      </div>
    </>
  )
}

export default App
