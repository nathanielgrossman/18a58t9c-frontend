import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { random, invert, coinToss } from "../utils/utils";
import { COLORS } from "../utils/constants";

const Text = styled.span`
  letter-spacing: 4px;
  font-size: 1.25em;
  transition: text-shadow 0.5s, color 0.25s;
  -webkit-transition: text-shadow 0.5s, color 0.25s;
`;

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
      // if counter has surpassed int, reset counter, choose a new color, and randomize a style
      if (counter > int && element.current) {
        counter = 0
        const bg = COLORS[random(0, COLORS.length - 1)]
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
    <Text ref={element}>
      {text}
    </Text>
  )
}

export default ColorText