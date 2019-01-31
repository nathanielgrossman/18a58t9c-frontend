import React, { useContext } from "react";
import AppContext from "../AppContext.js";

function GroupButton() {

  const { nextGroup } = useContext(AppContext);


  return (
    <button className="group-button" onClick={nextGroup} >
      <span>></span>
    </button>
  )
}

export default GroupButton;