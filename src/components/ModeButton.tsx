import React, { SyntheticEvent, useContext } from "react";
import styled from "styled-components";

import AppContext from "../AppContext";

const Button = styled.button`
  flex: 1;
`;

const Icon = styled.span`
  font-size: 2em;
  &:hover {
    color: #ddd;
  }
  &:active {
    color: #aaa;
  }
`;

const ModeButton: React.FC = () => {
  const { chronological, toggleMode } = useContext(AppContext);

  const title = chronological ? "Algorithmic View" : "Chronological View";
  const toggle = (e: SyntheticEvent) => {
    e.preventDefault();
    toggleMode();
  };

  return (
    <Button type="button" title={title} onClick={toggle}>
      {chronological ? (
        <Icon>&#9860;</Icon>
      ) : (
        <Icon>&#9716;</Icon>
      )}
    </Button>
  );
};

export default ModeButton;
