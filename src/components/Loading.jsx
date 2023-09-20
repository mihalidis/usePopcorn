import "../assets/sass/loading.css"

function Loading() {
  return <>
    <div className="loading w-full max-w-lg bg-[#222831] rounded-md relative">
      <div className="spinner">
        <h3><span className="visually-hidden">visuallyhidden</span></h3>
      </div>
    </div>
  </>
}

export default Loading