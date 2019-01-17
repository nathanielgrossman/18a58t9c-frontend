import React, { useContext } from "react";
import AppContext from "../AppContext.js";
import Thumbnail from "./Thumbnail.js";
import GroupButton from "./GroupButton.js";

function Timeline() {

  const { images, totalImages, toggleEndpoint, chronological } = useContext(AppContext);

  const thumbnails = images.map((image, index) => {
    return (
      <Thumbnail
        key={`thumb${index}`}
        id={image._id}
        index={index}
        title={image.original}
        color={image.color}
        type={'thumbnail'}
      />
    )
  })

  return (
    <div id="timeline-wrapper">
      <div id="timeline">
          <span id="title" onClick={toggleEndpoint}>{chronological ? images[0].created_at : '18a58t9c'}</span>
          {thumbnails}
          { images.length !== totalImages ? <GroupButton next={true} /> : null }
          <div id="spacer"></div>
      </div>
    </div>
  )
}

export default Timeline;