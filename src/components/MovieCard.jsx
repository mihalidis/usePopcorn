function MovieCard({children, movie, title, poster, setSelectedMovie}) {
  return (
    <>
      <div onClick={() => setSelectedMovie(movie)} className="movie-card flex gap-x-[10px] items-center border-b-4 border-b-[#D65A31] cursor-pointer hover:border-b-[#4E4FEB]">
        <img className="h-[90px]" src={poster} alt={title} />
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