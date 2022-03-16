import React, { SyntheticEvent, useContext } from "react";
import AppContext from "../AppContext";

const ModeButton: React.FC = () => {
  const { chronological, toggleMode } = useContext(AppContext);

  const title = chronological ? "Algorithmic View" : "Chronological View";
  const toggle = (e: SyntheticEvent) => {
    e.preventDefault();
    toggleMode();
  };

  return (
    <button className="left" type="button" title={title} onClick={toggle}>
      {chronological ? (
        <span className="icon">&#9860;</span>
      ) : (
        <span className="icon">&#9716;</span>
      )}
    </button>
  );
};

export default ModeButton;
