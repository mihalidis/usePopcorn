import './App.css'
import Header from './components/Header'
import SearchedMovies from './components/SearchedMovies'
import WatchedMovies from './components/WatchedMovies'
import MovieInfo from './components/MovieInfo'
import MovieCard from "./components/MovieCard"
import CalendarLogo from "./assets/calendar.png"
import EmptyState from './components/EmptyState'
import Loupe from "./assets/loupe.png"
import Loading from "./components/Loading"
import { useState, useEffect } from "react"

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchedMovies, setSearchedMovies] = useState([])
  const [watchedMovies, setWatchedMovies] = useState(() => {
    const getWatchedMovies = localStorage.getItem('watched')
    return JSON.parse(getWatchedMovies)
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchResults = async (search) => {
    setIsLoading(true)
    await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}&s=${search}`)
    .then(response => response.json())
    .then((data) => {
      if (data.Response === "True") {
        setSearchedMovies(data.Search)
      } else {
        setSearchedMovies([])
      }
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  const handleAddToList = (movie, rating) => {
    const findMovie = watchedMovies.find(item => item.imdbID === movie.imdbID)
    if (!findMovie) setWatchedMovies((prev) => [...prev, {...movie, userRating: rating}])
  }

  const handleRemoveWatchedMovie = (movie) => {
    setWatchedMovies((prevValue) => prevValue.filter(item => movie.imdbID !== item.imdbID))
  }

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watchedMovies))
  }, [watchedMovies])

  return (
    <>
      <Header handleSearchResults={handleSearchResults} searchResultCount={searchedMovies.length} />
      <div className='flex justify-center mt-[16px] gap-x-[20px]'>
        {
          isLoading ? <Loading /> : <SearchedMovies>
          {
            searchedMovies && searchedMovies.length > 0 ? searchedMovies.map(item => (
              <MovieCard key={item.imdbID} movie={item} poster={item.Poster} title={item.Title} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}>
                <span className="imdb-rating flex items-center">
                  <img className="h-[20px] inline mr-[6px]" src={CalendarLogo} alt="imdb-logo"></img>
                  {item.Year}
                </span>
              </MovieCard>
            )) : <EmptyState text="Please search for the movie you would like to see more info." icon={Loupe} />
          }
        </SearchedMovies>
        }
        {
          selectedMovie ? <MovieInfo 
                            selectedMovie={selectedMovie}
                            setSelectedMovie={setSelectedMovie}
                            handleAddToList={handleAddToList} />
                            :
                            <WatchedMovies watchedMovies={watchedMovies} handleRemoveWatchedMovie={handleRemoveWatchedMovie} />
        }
      </div>
    </>
  )
}

export default App
