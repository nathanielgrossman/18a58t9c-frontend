import React, { useContext } from "react";
import AppContext from "../AppContext.js";
import Thumbnail from "./Thumbnail.js";
import GroupButton from "./GroupButton.js";

function Timeline() {

  const { images, totalImages } = useContext(AppContext);

  const thumbnails = images.map((image, index) => {
    return (
      <Thumbnail
        key={`thumb${index}`}
        id={image._id}
        index={index}
        title={image.original.substring(0,image.original.length-4)}
        color={image.color}
        type={'thumbnail'}
      />
    )
  })

  return (
    <div id="timeline-wrapper">
      <div id="timeline">
          <span id="date">{images[0].created_at}</span>
          {thumbnails}
          { images.length !== totalImages ? <GroupButton next={true} /> : null }
          <div id="spacer"></div>
      </div>
    </div>
  )
}

export default Timeline;