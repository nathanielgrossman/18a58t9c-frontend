import React, { useContext } from "react";
import AppContext from "../AppContext";
import ModeButton from "./ModeButton";

function TopBar() {
  const { chronological } = useContext(AppContext);

  return (
    <div id="top-bar">
      <ModeButton />
      <p id="title">{chronological ? 'archive' : '18a58t9c'}</p>
    </div> 
  )
}

export default TopBar;