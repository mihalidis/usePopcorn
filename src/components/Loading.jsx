import "../assets/sass/loading.css"

function Loading() {
  return <>
    <div className="loading w-full flex-1 bg-[#222831] rounded-md relative scrollable-container">
      <div className="spinner">
        <h3><span className="visually-hidden">visuallyhidden</span></h3>
      </div>
    </div>
  </>
}

export default Loading