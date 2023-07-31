import PropTypes from "prop-types";

Star.propTypes = {
    id: PropTypes.number,
    setCurrentHoveredStar: PropTypes.func,
    isFilled: PropTypes.bool,
    setSelectedStar: PropTypes.func
}

function Star({ id, setCurrentHoveredStar, isFilled, setSelectedStar }) {
    return <>
        <div onMouseEnter={() => setCurrentHoveredStar(id)}
             onMouseLeave={() => setCurrentHoveredStar(-1)}
             onClick={() => setSelectedStar(id)}>
            {
                isFilled ? <svg className="w-[24px] h-[24px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="#F9D949" viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    :
                    <svg className="w-[24px] h-[24px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="#F9D949" viewBox="0 0 24 24"><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>
            }
        </div>
    </>
}

export default Star