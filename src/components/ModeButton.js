import React, { useContext } from "react";
import AppContext from "../AppContext.js";

function ModeButton() {
  const { chronological, toggleEndpoint } = useContext(AppContext);

  const title = chronological ? 'Algorithmic View' : 'chronological View';
  const toggle = (e) => {
    e.preventDefault();
    toggleEndpoint();
  }

  return (
    <button className="left" type="button" title={title} alt={title} onClick={toggle}>{chronological ? <span className="icon">&#9860;</span> : <span className="icon">&#9716;</span>}</button>
  )
}

export default ModeButton;