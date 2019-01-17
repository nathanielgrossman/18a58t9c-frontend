import React, { useContext } from "react";
import AppContext from "../AppContext.js";

function Thumbnail({ id, index, title, color, type }) {

  const { select } = useContext(AppContext);

  return (
    <img 
      className={type}
      alt={title} 
      src={`https://s3-us-west-1.amazonaws.com/18a58t9c/thumbs/${id}.jpg`}
      onClick={() => select(index, id)}
    />
  )
}

export default Thumbnail;