import React, { useEffect, useContext } from "react";
import AppContext from "../AppContext";
import Thumbnail from "./Thumbnail";
import { random } from "../utils/utils";
import {
  IMAGE_COUNT_BY_WIDTH,
  IS_NONSTANDARD_WIDTH,
  WINDOW_OFFSET,
} from "../utils/constants";

const Scatter = () => {
  const { images, totalImages } = useContext(AppContext);

  const thumbnails = images
    .slice(0, IS_NONSTANDARD_WIDTH ? images.length : IMAGE_COUNT_BY_WIDTH)
    .map((image, index) => {
      const style = {
        top: random(50, window.innerHeight - WINDOW_OFFSET),
        left: random(0, window.innerWidth - WINDOW_OFFSET),
        zIndex: random(0, totalImages),
      };

      return (
        <div key={image._id} className="scatter-box" style={style}>
          <Thumbnail
            key={`thumb${index}`}
            id={image._id}
            index={index}
            title={image.original.substring(0, image.original.length - 4)}
            color={image.color}
            type={"scatter-thumb"}
          />
        </div>
      );
    });

  return <div id="scatter">{thumbnails}</div>;
};

export default Scatter;
