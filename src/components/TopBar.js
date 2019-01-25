import React, { useContext } from "react";
import AppContext from "../AppContext.js";
import ModeButton from "./ModeButton.js";

function TopBar() {
  const { chronological } = useContext(AppContext);

  return (
    <div id="top-bar">
      <p id="title">{chronological ? 'archive' : '18a58t9c'}</p>
      <ModeButton />
    </div> 
  )
}

export default TopBar;