import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../AppContext";

const Button = styled.button`
  height: 100%;
  vertical-align: top;
  margin-left: 5px;
  display: inline-block;
  width: 2em;
  text-align: center;
  border: 1px solid black;
  &:hover {
    border: 1px solid #ddd;
    background: #ddd;
    color: white;
  }
  @media screen and (max-device-width: 850px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 5px;
    height: 2em;
  }
`;

const GroupButton: React.FC = () => {
  const { loadNextGroup } = useContext(AppContext);

  return (
    <Button type="button" onClick={(loadNextGroup)}>
      <span>{">"}</span>
    </Button>
  );
};

export default GroupButton;
