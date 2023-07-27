import './App.css'
import Header from './components/Header'
import SearchedMovies from './components/SearchedMovies'
import WatchedMovies from './components/WatchedMovies'
import MovieInfo from './components/MovieInfo'

function App() {
  return (
    <>
      <Header />
      <div className='flex justify-center mt-[16px] gap-x-[20px]'>
        <SearchedMovies />
        {/* <WatchedMovies /> */}
        <MovieInfo />
      </div>
    </>
  )
}

export default App
