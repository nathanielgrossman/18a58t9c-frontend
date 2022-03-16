import React, { useContext, useMemo } from "react";
import AppContext from "../AppContext";
import Thumbnail from "./Thumbnail";
import GroupButton from "./GroupButton";

const Timeline: React.FC = () => {
  const { images, totalImages } = useContext(AppContext);

  const thumbnails = useMemo(
    () =>
      images.map((image, index) => {
        return (
          <Thumbnail
            key={`thumb${index}`}
            id={image._id}
            index={index}
            title={image.original.substring(0, image.original.length - 4)}
            color={image.color}
            type={"thumbnail"}
          />
        );
      }),
    []
  );

  return (
    <div id="timeline-wrapper">
      <div id="timeline">
        <span id="date">{images[0].created_at}</span>
        {thumbnails}
        {images.length !== totalImages ? <GroupButton /> : null}
        <div id="spacer"></div>
      </div>
    </div>
  );
};

export default Timeline;
