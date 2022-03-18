import React, { useContext, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { random, invert, coinToss } from "../utils/utils";
import { COLORS, DEBUG_COLORS, ERROR_COLORS } from "../utils/constants";
import AppContext from "../AppContext";

type TextProps = {
  shadowTime?: number;
  colorTime?: number;
  fontSize?: number;
};

const Text = styled.span<TextProps>`
  letter-spacing: 4px;
  ${({ shadowTime = 0.5, colorTime = 0.25, fontSize = 1.25 }) => css`
    font-size: ${fontSize}em;
    transition: text-shadow ${shadowTime}s, color ${colorTime}s;
    -webkit-transition: text-shadow ${shadowTime}s, color ${colorTime}s;
  `}
`;

type ColorTextProps = {
  text: string;
  /**
   * An integer used for determining the rate of the animation
   */
  int: number;
  debugProps?: ColorTextDebugProps;
};

export type ColorTextDebugProps = {
  debugColor?: boolean;
  hLow?: number;
  hHigh?: number;
  vLow?: number;
  vHigh?: number;
  blurLow?: number;
  blurHigh?: number;
} & TextProps;

export const ColorText: React.FC<ColorTextProps> = ({
  text,
  int,
  debugProps = {},
}) => {
  const { error } = useContext(AppContext);
  const element = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let colors: readonly RGB[] = COLORS;

    if (debugProps.debugColor) {
      colors = DEBUG_COLORS;
    } else if (error) {
      colors = ERROR_COLORS;
    }

    const hLow = debugProps.hLow || -5;
    const hHigh = debugProps.hHigh || 2;
    const vLow = debugProps.vLow || -2;
    const vHigh = debugProps.vHigh || 5;
    const blurLow = debugProps.blurLow || 0;
    const blurHigh = debugProps.blurHigh || 7;

    const limit = error ? int * 2 : int;
    let counter = 0;

    const step = () => {
      // if counter has surpassed limit, reset counter, choose a new color, and randomize a style
      if (counter > limit && element.current) {
        counter = 0;
        const bg = colors[random(0, colors.length - 1)];
        element.current.style.color = error ? bg : invert(bg, coinToss());
        element.current.style.textShadow = `${random(hLow, hHigh)}px ${random(
          vLow,
          vHigh
        )}px ${random(blurLow, blurHigh)}px ${bg}`;
      }
      counter++;
      window.requestAnimationFrame(step);
    };

    const animation = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animation);
    };
  }, [text, int, error]);

  return (
    <Text
      fontSize={debugProps.fontSize}
      shadowTime={debugProps.shadowTime}
      colorTime={debugProps.colorTime}
      ref={element}
    >
      {text}
    </Text>
  );
};

export default ColorText;
