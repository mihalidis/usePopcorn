function Header() {
  return (
    <>
      <div className="flex items-center justify-between w-full p-[20px] bg-[#533483] rounded-md mt-[20px]">
        <span className="title font-bold text-[22px]">🍿 usePopcorn</span>
        <input className="movie-search p-[6px] rounded-md shadow-md bg-[#5C469C]" />
        <span>Found 3 results</span>
      </div>
    </>
  )
}

export default Header