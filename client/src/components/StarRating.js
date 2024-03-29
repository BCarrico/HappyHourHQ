
import React from "react";

const StarRating = (props) => {
    return (
  <div className="star-rating flex text-black items-center space-x-1">
        {[...Array(4)].map((star, index) => {
          index += 1;
          return (
            <div
              key={index}
              className={props.rating == null ||Math.round(props.rating) <= index-1 ? "text-gray-300" : "text-green-400"}
            >
              <div className={props.starStyle == undefined ? "text-xl -mr-1" : props.starStyle}>&#9733;</div>
            </div>
          );
        })}
      
    </div>
    );
  };

export default StarRating;