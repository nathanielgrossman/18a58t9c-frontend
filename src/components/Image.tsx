import React, { useContext } from "react";
import styled, { css } from "styled-components";

import AppContext from "../AppContext";
import { getJpgURL, getWebpURL } from "../utils/urlUtils";

const ImageView = styled.div<{ background: string }>`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100;
  padding: 10px;
  ${({ background }) => css`
    background: ${background};
  `}
`;

const pictureStyle = css`
  max-height: 100%;
  max-width: 100%;
  pointer-events: none !important;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;
`;

const Picture = styled.picture`
  ${pictureStyle}
`;

const Webp = styled.source`
  ${pictureStyle}
`;

const Jpg = styled.img`
  ${pictureStyle}
`;

const Image: React.FC = () => {
  const { images, selected, deselect } = useContext(AppContext);

  if (selected === null) {
    return null;
  }

  const { original, _id, color } = images[selected];

  return (
    <ImageView background={color} onClick={deselect}>
      <button autoFocus onClick={deselect} />
      <Picture>
        <Webp type="image/webp" srcSet={getWebpURL(_id)} />
        <Jpg alt={original} src={getJpgURL(_id)} />
      </Picture>
    </ImageView>
  );
};

export default Image;
