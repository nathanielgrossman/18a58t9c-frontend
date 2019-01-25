import React, { useContext } from "react";
import AppContext from "../AppContext.js";

function ModeButton() {
  const { chronological, toggleEndpoint } = useContext(AppContext);

  return (
    <p className="icon" onClick={toggleEndpoint}>{chronological ? <span>&#9860;</span> : <span>&#9716;</span>}</p>
  )
}

export default ModeButton;