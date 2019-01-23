import React from "react";
import ColorText from "./ColorText.js"
import { random } from "../utils.js";


function Loader({ text }) {

  const chars = text.split('').map((char, index) => {
    return (
      <ColorText
        key={`color-text-${index}`}
        text={char}
        int={random(8, 40)}
      />
    )
  })

  return (
    <p>
      {chars}
    </p>
  )
}

export default Loader;