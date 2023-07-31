import {useState} from "react";
import PropTypes from "prop-types";

import Star from "./Star.jsx";

Rating.propTypes = {
    selectedStar: PropTypes.number,
    setSelectedStar: PropTypes.func
}

function Rating({selectedStar, setSelectedStar}) {
    const [currentHoveredStar, setCurrentHoveredStar] = useState(-1);

    return <>
        <div className="flex gap-x-[10px]">
            <div className="star-rating flex gap-x-[2px]">
                {
                    Array.from({length: 10}, (_, i) =>
                        <Star key={i}
                              id={i}
                              isFilled={currentHoveredStar >= i || selectedStar >= i}
                              setCurrentHoveredStar={setCurrentHoveredStar}
                              setSelectedStar={setSelectedStar}
                        />)
                }
            </div>
            {
                selectedStar >= 0 && <span>{selectedStar+1}</span>
            }
        </div>
    </>
}

export default Rating