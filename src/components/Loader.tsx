import React, { useMemo } from "react";
import ColorText from "./ColorText";
import { random } from "../utils/utils";

type LoaderProps = {
  text: string;
};

const Loader: React.FC<LoaderProps> = ({ text }) => {
  const chars = useMemo(
    () =>
      text.split("").map((char, index) => {
        return (
          <ColorText
            key={`color-text-${index}`}
            text={char}
            int={random(8, 40)}
          />
        );
      }),
    [text]
  );

  return <p>{chars}</p>;
};

export default Loader;
