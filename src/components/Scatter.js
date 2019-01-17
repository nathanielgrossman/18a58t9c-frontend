import React, { useEffect, useContext } from "react";
import AppContext from "../AppContext.js";
import Thumbnail from "./Thumbnail.js";

function Scatter() {

  const { images, totalImages, toggleEndpoint, chronological } = useContext(AppContext);

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const thumbnails = images.map((image, index) => {
    const style = {
      position: 'absolute',
      top: random(0, window.innerHeight-300),
      left: random(0, window.innerWidth-300),
      zIndex: random(0, totalImages),
      pointerEvents: 'none'
    }
    style.marginLeft = '20 px'

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