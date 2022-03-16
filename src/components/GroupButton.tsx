import React, { useContext } from "react";
import AppContext from "../AppContext";

const GroupButton: React.FC = () => {
  const { loadNextGroup } = useContext(AppContext);

  return (
    <button className="group-button" onClick={loadNextGroup}>
      <span>{">"}</span>
    </button>
  );
};

export default GroupButton;
