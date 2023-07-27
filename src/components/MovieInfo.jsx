import ImdbLogo from "../assets/imdb.png"
import Star from "../assets/star.png"
import EmptyStar from "../assets/star_empty.png"

function MovieInfo() {
  return (
    <>
      <div className="w-full max-w-lg bg-[#222831] rounded-md relative">
        <svg
        className="w-[20px] h-[20px] absolute top-3 right-3 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
            <path d="M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
        <div className="header flex gap-x-[10px] bg-[#393E46] pt-[40px]">
          <img className="h-[200px]" src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" alt="back-to-the-future" />
          <div className="flex flex-col gap-y-[10px]">
            <span className="text-[24px] font-bold">Star Wars: Episode V - The Empire Strikes Back</span>
            <span>18 Jun 1980 • 124 min</span>
            <span>Action, Adventure, Fantasy</span>
            <span className="imdb-rating"><img className="h-[32px] inline" src={ImdbLogo} alt="imdb-logo"></img> 8.7 IMDb rating</span>
          </div>
        </div>
        <div className="body flex flex-col items-center gap-y-[20px] pb-[20px]">
          <div className="flex flex-col items-center gap-y-[20px] rating p-[20px] bg-[#393E46] mt-[16px] w-full max-w-[323px] rounded-md">
            <div className="star flex gap-x-[6px]">
              <img className="h-[20px] cursor-pointer" src={Star} alt="star" />
              <img className="h-[20px] cursor-pointer" src={EmptyStar} alt="Empty Star" />
            </div>
            <button className="bg-[#533483] w-full max-w-[150px] rounded-[50px] px-[16px] py-[8px]">+Add to list</button>
          </div>
          <div className="movie-info flex flex-col items-start gap-y-[20px] w-full max-w-[323px]">
            <span className="text-[16px]">After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.</span>
            <span className="text-[16px]">Starring Mark Hamill, Harrison Ford, Carrie Fisher</span>
            <span className="text-[16px]">Directed by Irvin Kershner</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieInfo