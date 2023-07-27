function MovieCard({children}) {
  return (
    <>
      <div className="movie-card flex gap-x-[10px] items-center border-b-4 border-b-[#D65A31]">
        <img className="h-[90px]" src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" alt="back-to-the-future" />
        <div className="info p-[10px]">
          <span className="title">Back to the future</span>
          <div className="ratings mt-[12px] flex justify-between items-center gap-x-[30px]">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard