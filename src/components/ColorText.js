import React, { useEffect } from "react";
import colors from "../colors.js";

function ColorText({ text, int }) {
  let element = React.createRef();

  useEffect(() => {
    let counter = 0;

    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function invert(rgb, bw) {
      let channels = rgb.substring(4, rgb.length - 1).split(", ").map(channel => parseInt(channel))
      if (bw) return (channels[0] * 0.299 + channels[1] * 0.587 + channels[2] * 0.114) > 186 ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
      let inverted = channels.map(channel => 255 - channel);
      return `rgb(${inverted.join(', ')})`
    }

    function step(timestamp) {
      let bool = Math.random() >= 0.5;
      if (counter > int && element.current) {
        counter = 0
        let bg = colors[random(0, colors.length - 1)]
        element.current.style.background = bg;
        element.current.style.color = invert(bg, bool)

      }
      counter++;
      window.requestAnimationFrame(step);
    }

    let animation = window.requestAnimationFrame(step);

    return function cleanup() {
      window.cancelAnimationFrame(animation)
    }
  }, {})

  return (
    <span ref={element} className="color-text">
      {text}
    </span>
  )
}

export default ColorText