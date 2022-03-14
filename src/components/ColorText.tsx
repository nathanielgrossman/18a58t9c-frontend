import React, { useEffect, useRef } from "react";
import { random, invert, coinToss } from "../utils";
import colors from "../colors";

type ColorTextProps = {
  text: string,
  int: number,
}

export const ColorText: React.FC<ColorTextProps> = ({ text, int }) => {
  const element = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let counter = 0;

    const step = () => {
      if (counter > int && element.current) {
        counter = 0
        let bg = colors[random(0, colors.length - 1)]
        element.current.style.color = invert(bg, coinToss())
        element.current.style.textShadow = `${random(-5,2)}px ${random(-2,5)}px ${random(0,7)}px ${bg}`
      }
      counter++;
      window.requestAnimationFrame(step);
    }

    let animation = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animation)
    }
  }, [])

  return (
    <span ref={element} className="color-text">
      {text}
    </span>
  )
}

export default ColorText