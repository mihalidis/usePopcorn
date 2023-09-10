import './App.css'
import Header from './components/Header'
import SearchedMovies from './components/SearchedMovies'
import WatchedMovies from './components/WatchedMovies'
import MovieInfo from './components/MovieInfo'
import MovieCard from "./components/MovieCard"
import CalendarLogo from "./assets/calendar.png"
import { useState } from "react"

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchedMovies, setSearchedMovies] = useState([])
  const [watchedMovies, setWatchedMovies] = useState([{Title: 'Back to the Future', Year: '1985', imdbID: 'tt0088763', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OG…WIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'}])

  const handleSearchResults = (search) => {
    fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}&s=${search}`)
    .then(response => response.json())
    .then(data => setSearchedMovies(data.Search))
  }

  const handleAddToList = (movie, rating) => {
    console.log('movie', movie)
    console.log('rating', rating)
    console.log(watchedMovies)
  }

  return (
    <>
      <Header handleSearchResults={handleSearchResults} />
      <div className='flex justify-center mt-[16px] gap-x-[20px]'>
        <SearchedMovies>
          {
            searchedMovies && searchedMovies.map(item => (
              <MovieCard key={item.imdbID} movie={item} poster={item.Poster} title={item.Title} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}>
                <span className="imdb-rating flex items-center">
                  <img className="h-[20px] inline mr-[6px]" src={CalendarLogo} alt="imdb-logo"></img>
                  {item.Year}
                </span>
              </MovieCard>
            ))
          }
        </SearchedMovies>
        {
          selectedMovie ? <MovieInfo 
                            selectedMovie={selectedMovie}
                            setSelectedMovie={setSelectedMovie}
                            handleAddToList={handleAddToList} />
                            :
                            <WatchedMovies watchedMovies={watchedMovies} />
        }
      </div>
    </>
  )
}

export default App
