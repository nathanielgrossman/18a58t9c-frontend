import React, { useEffect, useContext } from "react";
import AppContext from "../AppContext.js";
import Thumbnail from "./Thumbnail.js";
import { random } from "../utils.js";

function Scatter() {

  const { images, totalImages, toggleEndpoint, chronological } = useContext(AppContext);

  const thumbnails = images.
    slice(0,window.innerWidth < 850 || window.innerWidth > 2000 ? images.length : Math.floor(window.innerWidth / 90)).
    map((image, index) => {
      let offset = window.innerWidth < 850 ? 110 : 330;

      const style = {
        position: 'absolute',
        top: random(50, window.innerHeight - offset),
        left: random(0, window.innerWidth - offset),
        zIndex: random(0, totalImages),
        pointerEvents: 'none'
      }

      return (
        <div key={image._id} className="scatter-box" style={style}>
        <Thumbnail
          key={`thumb${index}`}
          id={image._id}
          index={index}
          title={image.original.substring(0,image.original.length-4)}
          color={image.color}
          type={'scatter-thumb'}
        />
        </div>
      )
    })

  return (
    <div id="scatter">
      {thumbnails}
    </div>
  )
}

export default Scatter;