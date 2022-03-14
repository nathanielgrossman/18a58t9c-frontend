import React, { useContext } from "react";
import AppContext from "../AppContext";

const Image: React.FC = () => {

  const { images, selected, deselect } = useContext(AppContext);

  if (selected === null) {
    return null;
  }
  console.log('IMAGES', images)
  const { original, _id, color } = images[selected]

  const bgStyle = {
    background: color
  }

  return (
    <div 
      id="image-view" 
      style={bgStyle} 
      onClick={deselect}
    >
      <button autoFocus id="image-view-button" onClick={deselect} />
      <picture className="disable">
        <source className="picture disable" type="image/webp" srcSet={`https://s3-us-west-1.amazonaws.com/18a58t9c/webp/${_id}.webp`} />
        <img className="picture disable" alt={`${original}`} src={`https://s3-us-west-1.amazonaws.com/18a58t9c/jpg/${_id}.jpg`} />
      </picture>
    </div>
  )
}

export default Image;