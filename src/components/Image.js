import React, { useContext } from "react";
import AppContext from "../AppContext.js";

function Image() {

  const { images, selected, deselect } = useContext(AppContext);

  const { original, _id, color } = images[selected]
  return (
    <picture onClick={() => deselect()}>
      <source type="image/webp" srcSet={`https://s3-us-west-1.amazonaws.com/18a58t9c/webp/${_id}.webp`} />
      <img alt={`${original}`} src={`https://s3-us-west-1.amazonaws.com/18a58t9c/jpg/${_id}.jpg`} />
    </picture>
  )
}

export default Image;