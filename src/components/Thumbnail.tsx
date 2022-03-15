import React, { useContext } from "react";
import AppContext from "../AppContext";
import { getThumbURL } from "../utils/urlUtils";

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
        src={getThumbURL(id)}
      />
    </button>
  )
}

export default Thumbnail;