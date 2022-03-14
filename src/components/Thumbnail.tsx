import React, { useContext } from "react";
import AppContext from "../AppContext";

type ThumbnailProps = {
  id: string;
  index: number;
  title: string;
  color: string;
  type: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ id, index, title, color, type }) => {

  const { select } = useContext(AppContext);

  const buttonClass = `${type}-button`

  return (
    <button className={buttonClass} onClick={() => select(index, id)}>
      <img 
        className={type}
        alt={title} 
        src={`https://s3-us-west-1.amazonaws.com/18a58t9c/thumbs/${id}.jpg`}
      />
    </button>
  )
}

export default Thumbnail;