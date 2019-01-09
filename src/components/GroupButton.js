import React, { useContext } from "react";
import AppContext from "../AppContext.js";

function GroupButton() {

  const { nextGroup } = useContext(AppContext);


  return (
    <div className="group-button" onClick={() => nextGroup()} >
      <span>></span>
    </div>
  )
}

export default GroupButton;