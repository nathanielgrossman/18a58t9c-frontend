import React, { useContext } from "react";
import styled, { css } from "styled-components";

import AppContext from "../AppContext";
import { getThumbURL } from "../utils/urlUtils";

type ThumbnailType = "scatter" | "timeline"

const scatterThumbnail = css`
  max-width: 100%;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
`;

const timelineThumbnail = css`
  margin: 0px 5px 0px 5px;
  @media screen and (max-device-width: 850px) {
    max-width: 100%;
    max-height: unset;
    margin: 5px 0px 5px 0px;
  }
`;

const scatterThumbButton = css`
  height: 100%;
  width: 100%;
`;

const timelineThumbButton = css`
  height: 400px;
  @media screen and (max-device-width: 850px) {
    height: unset;
    width: 80vw;
    max-width: 400px;
  }
`;

const Image = styled.img<{thumbnailType: ThumbnailType}>`
  max-height: 100%;
  ${({thumbnailType}) => thumbnailType === 'scatter' ? scatterThumbnail : timelineThumbnail}
`;

const Button = styled.button<{ thumbnailType: ThumbnailType }>`
  ${({ thumbnailType }) => (thumbnailType === "scatter" ? scatterThumbButton : timelineThumbButton)}
`;

type ThumbnailProps = {
  id: string;
  index: number;
  title: string;
  thumbnailType: ThumbnailType;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ id, index, title, thumbnailType }) => {
  const { select } = useContext(AppContext);

  return (
    <Button thumbnailType={thumbnailType} onClick={() => select(index, id)}>
      <Image thumbnailType={thumbnailType} alt={title} src={getThumbURL(id)} />
    </Button>
  );
};

export default Thumbnail;
