import Star from "./Star.jsx";
import {useState} from "react";

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