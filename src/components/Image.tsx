import React, { useContext } from "react";
import AppContext from "../AppContext";
import { getJpgURL, getWebpURL } from "../utils/urlUtils";

const Image: React.FC = () => {
  const { images, selected, deselect } = useContext(AppContext);

  if (selected === null) {
    return null;
  }

  const { original, _id, color } = images[selected];

  const bgStyle = {
    background: color,
  };

  return (
    <div id="image-view" style={bgStyle} onClick={deselect}>
      <button autoFocus id="image-view-button" onClick={deselect} />
      <picture className="disable">
        <source
          className="picture disable"
          type="image/webp"
          srcSet={getWebpURL(_id)}
        />
        <img className="picture disable" alt={original} src={getJpgURL(_id)} />
      </picture>
    </div>
  );
};

export default Image;
