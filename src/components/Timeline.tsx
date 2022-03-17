import React, { useContext, useMemo } from "react";
import styled, { css } from "styled-components";

import AppContext from "../AppContext";
import Thumbnail from "./Thumbnail";
import GroupButton from "./GroupButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  z-index: 0;
  -webkit-overflow-scrolling: touch;
  @media screen and (max-device-width: 850px) {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const Inner = styled.div`
  height: 400px;
  padding-left: calc(50vw - 250px);
  padding-right: 50vw;
  white-space: nowrap;
  @media screen and (max-device-width: 850px) {
    height: 100%;
    width: 80vw;
    max-width: 400px;
    padding-top: 10vh;
    padding-left: 0;
    padding-right: 0;
    white-space: normal;
  }
`;

const Date = styled.span`
  vertical-align: top;
  padding: 0px 20px 0px 0px;
  display: inline-block;
  width: 250px;
  text-align: right;
  @media screen and (max-device-width: 850px) {
    padding: 20px 0px 20px 0px;
    width: 100%;
    text-align: left;
  }
`;

const Spacer = styled.div`
  @media screen and (max-device-width: 850px) {
    height: 1px;
    margin-top: 10vh;
  }
`;

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
            thumbnailType={"timeline"}
          />
        );
      }),
    [images, totalImages]
  );

  return (
    <Wrapper>
      <Inner>
        <Date>{images[0].created_at}</Date>
        {thumbnails}
        {images.length !== totalImages ? <GroupButton /> : null}
        <Spacer />
      </Inner>
    </Wrapper>
  );
};

export default Timeline;
