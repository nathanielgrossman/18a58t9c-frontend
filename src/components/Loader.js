import React from "react";
import ColorText from "./ColorText.js"


function Loader({ text }) {

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const chars = text.split('').map((char, index) => {
    return (
      <ColorText
        key={`color-text-${index}`}
        text={char}
        int={random(5, 12)}
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