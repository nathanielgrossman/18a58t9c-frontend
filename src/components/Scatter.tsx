import React, { useContext } from "react";
import styled, { css } from "styled-components";

import AppContext from "../AppContext";
import Thumbnail from "./Thumbnail";
import { random } from "../utils/utils";
import {
  IMAGE_COUNT_BY_WIDTH,
  IS_NONSTANDARD_WIDTH,
  WINDOW_OFFSET,
} from "../utils/constants";


const ScatterBox = styled.div`
  height: 300px;
  width: 300px;
  pointer-events: none;
  position: absolute;
  @media screen and (max-device-width: 850px) {
    height: 100px;
    width: 100px;
  }
`;

const ScatterView = styled.div`
  height: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  z-index: 0;
  -webkit-overflow-scrolling: touch;
`;

const Scatter: React.FC = () => {
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
        <ScatterBox key={image._id} style={style}>
          <Thumbnail
            key={`thumb${index}`}
            id={image._id}
            index={index}
            title={image.original.substring(0, image.original.length - 4)}
            thumbnailType={"scatter"}
          />
        </ScatterBox>
      );
    });

  return <ScatterView>{thumbnails}</ScatterView>;
};

export default Scatter;
