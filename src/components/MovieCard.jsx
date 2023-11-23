import PropTypes from "prop-types";
import DeleteIcon from "../assets/delete.png"

MovieCard.propTypes = {
  children: PropTypes.node,
  movie: PropTypes.object,
  title: PropTypes.string,
  poster: PropTypes.string,
  selectedMovie: PropTypes.object,
  setSelectedMovie: PropTypes.func,
  removeButton: PropTypes.bool,
  handleRemoveWatchedMovie: PropTypes.func
}

function MovieCard({children, movie, title, poster, selectedMovie, setSelectedMovie, removeButton, handleRemoveWatchedMovie}) {
  const isSelected = selectedMovie?.imdbID === movie?.imdbID;
  return (
    <>
      <div onClick={setSelectedMovie ? () => setSelectedMovie(movie) : () => {return}} className={`movie-card flex gap-x-[10px] items-center border-b-4 ${
          isSelected ? 'border-b-4 border-b-[#4E4FEB]' : 'border-b-4 border-b-[#D65A31]'
        } cursor-pointer hover:border-b-[#4E4FEB] relative`}>
        <img className="w-[70px] h-[95px] object-cover" src={poster} alt={title} />
        <div className="info p-[10px]">
          <span className="title">{title}</span>
          <div className="ratings mt-[12px] flex justify-between items-center gap-x-[30px]">
            {children}
          </div>
        </div>
        {removeButton && <div className="absolute right-[20px] top-[35px] group" onClick={() => handleRemoveWatchedMovie(movie)}>
          <img className="h-[18px] inline mr-[6px] group-hover:h-[20px]" src={DeleteIcon} alt="delete-icon"></img>
        </div>}
      </div>
    </>
  )
}

export default MovieCard