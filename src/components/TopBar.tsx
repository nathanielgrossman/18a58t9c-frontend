import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../AppContext";
import ModeButton from "./ModeButton";

const Bar = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  padding: 0em 0.5em 0em 0.5em;
  z-index: 1;
`;

const Title = styled.p`
  font-size: 1em;
  vertical-align: text-bottom;
  margin-top: 1em;
`;

const TopBar: React.FC = () => {
  const { chronological } = useContext(AppContext);

  return (
    <Bar id="top-bar">
      <ModeButton />
      <Title id="title">{chronological ? "archive" : "18a58t9c"}</Title>
    </Bar>
  );
};

export default TopBar;
