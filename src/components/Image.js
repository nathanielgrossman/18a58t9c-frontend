import React, { useContext } from "react";
import AppContext from "../AppContext.js";

function Image() {

  const { images, selected, deselect } = useContext(AppContext);

  const { original, _id, color } = images[selected]

  const bgStyle = {
    background: color
  }

  return (
    <div 
      id="image-view" 
      style={bgStyle} 
      onClick={() => deselect()}
    >
      <picture>
        <source className="picture" type="image/webp" srcSet={`https://s3-us-west-1.amazonaws.com/18a58t9c/webp/${_id}.webp`} />
        <img className="picture" alt={`${original}`} src={`https://s3-us-west-1.amazonaws.com/18a58t9c/jpg/${_id}.jpg`} />
      </picture>
    </div>
  )
}

export default Image;