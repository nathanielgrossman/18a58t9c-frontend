import React, { useEffect, useRef } from "react";
import { random, invert, coinToss } from "../utils/utils";
import { COLORS } from "../utils/constants";

type ColorTextProps = {
  text: string;
  /**
   * An integer used for determining the rate of the animation
   */
  int: number;
};

export const ColorText: React.FC<ColorTextProps> = ({ text, int }) => {
  const element = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let counter = 0;

    const step = () => {
      if (counter > int && element.current) {
        counter = 0
        let bg = COLORS[random(0, COLORS.length - 1)]
        element.current.style.color = invert(bg, coinToss())
        element.current.style.textShadow = `${random(-5,2)}px ${random(-2,5)}px ${random(0,7)}px ${bg}`
      }
      counter++;
      window.requestAnimationFrame(step);
    }

    const animation = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animation)
    }
  }, [text, int])

  return (
    <span ref={element} className="color-text">
      {text}
    </span>
  )
}

export default ColorText