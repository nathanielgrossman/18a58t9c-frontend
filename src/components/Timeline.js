import React, { useContext } from "react";
import AppContext from "../AppContext.js";
import Thumbnail from "./Thumbnail.js";

function Timeline() {

  const { images } = useContext(AppContext);

  const thumbnails = images.map((image, index) => {
    return (
      <Thumbnail
        key={`thumb${index}`}
        id={image._id}
        index={index}
        title={image.original}
        color={image.color}
      />
    )
  })

  return (
    <div id="timeline-wrapper">
      <div id="timeline">
          {thumbnails}
      </div>
    </div>
  )
}

export default Timeline;