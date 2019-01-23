import React, { useEffect, useContext } from "react";
import AppContext from "../AppContext.js";
import Thumbnail from "./Thumbnail.js";
import { random } from "../utils.js";

function Scatter() {

  const { images, totalImages, toggleEndpoint, chronological } = useContext(AppContext);
  
  const thumbnails = images.map((image, index) => {
    const style = {
      position: 'absolute',
      top: random(20, window.innerHeight * .75),
      left: random(0, window.innerWidth * .75),
      zIndex: random(0, totalImages),
      pointerEvents: 'none'
    }

    return (
      <div key={image._id} className="scatter-box" style={style}>
      <Thumbnail
        key={`thumb${index}`}
        id={image._id}
        index={index}
        title={image.original}
        color={image.color}
        type={'scatter-thumb'}
      />
      </div>
    )
  })

  return (
    <div id="scatter">
      <span onClick={toggleEndpoint}>{chronological ? images[0].created_at : '18a58t9c'}</span>
      {thumbnails}
    </div>
  )
}

export default Scatter;