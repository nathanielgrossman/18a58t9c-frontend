import React, { useContext } from "react";
import AppContext from "../AppContext.js";

function Thumbnail({ id, index, title, color }) {

  const { select } = useContext(AppContext);

  return (
    <img 
      alt={title} 
      src={`https://s3-us-west-1.amazonaws.com/18a58t9c/thumbs/${id}.jpg`}
      onClick={() => select(index)}
    />
  )
}

export default Thumbnail;