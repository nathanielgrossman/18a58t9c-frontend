import React, { useMemo } from "react";
import ColorText, { ColorTextDebugProps } from "./ColorText";
import { random } from "../utils/utils";

type LoaderProps = {
  text: string;
  globalRate?: number;
  rateLow?: number;
  rateHigh?: number;
  colorTextDebugProps?: ColorTextDebugProps
};

const Loader: React.FC<LoaderProps> = ({
  text,
  globalRate,
  colorTextDebugProps,
  rateLow = 8,
  rateHigh = 40,
}) => {
  const chars = useMemo(
    () =>
      text.split("").map((char, index) => {
        return (
          <ColorText
            key={`color-text-${index}`}
            text={char}
            int={globalRate || random(rateLow, rateHigh)}
            debugProps={colorTextDebugProps}
          />
        );
      }),
    [text]
  );

  return <p>{chars}</p>;
};

export default Loader;
