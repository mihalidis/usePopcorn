import PropTypes from "prop-types";

MovieCard.propTypes = {
  children: PropTypes.node,
  movie: PropTypes.object,
  title: PropTypes.string,
  poster: PropTypes.string,
  selectedMovie: PropTypes.object,
  setSelectedMovie: PropTypes.func
}

function MovieCard({children, movie, title, poster, selectedMovie, setSelectedMovie}) {
  const isSelected = selectedMovie?.imdbID === movie?.imdbID;
  return (
    <>
      <div onClick={setSelectedMovie ? () => setSelectedMovie(movie) : () => {return}} className={`movie-card flex gap-x-[10px] items-center border-b-4 ${
          isSelected ? 'border-b-4 border-b-[#4E4FEB]' : 'border-b-4 border-b-[#D65A31]'
        } cursor-pointer hover:border-b-[#4E4FEB]`}>
        <img className="w-[70px] h-[95px] object-cover" src={poster} alt={title} />
        <div className="info p-[10px]">
          <span className="title">{title}</span>
          <div className="ratings mt-[12px] flex justify-between items-center gap-x-[30px]">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard