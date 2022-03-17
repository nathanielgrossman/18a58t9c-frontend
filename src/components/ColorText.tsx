import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import { random, invert, coinToss } from "../utils/utils";
import { COLORS, ERROR_COLORS } from "../utils/constants";
import AppContext from "../AppContext";

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
  const { error } = useContext(AppContext);
  const element = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const colors = error ? ERROR_COLORS : COLORS;
    const limit = error ? int * 2 : int;
    let counter = 0;

    const step = () => {
      // if counter has surpassed limit, reset counter, choose a new color, and randomize a style
      if (counter > limit && element.current) {
        counter = 0;
        const bg = colors[random(0, colors.length - 1)];
        element.current.style.color = error ? bg : invert(bg, coinToss());
        element.current.style.textShadow = `${random(-5, 2)}px ${random(
          -2,
          5
        )}px ${random(0, 7)}px ${bg}`;
      }
      counter++;
      window.requestAnimationFrame(step);
    };

    const animation = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animation);
    };
  }, [text, int]);

  return <Text ref={element}>{text}</Text>;
};

export default ColorText;
