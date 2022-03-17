import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../AppContext";
import Timeline from "./Timeline";
import Image from "./Image";
import Scatter from "./Scatter";
import Loader from "./Loader";
import TopBar from "./TopBar";

const View = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainView: React.FC = () => {
  const { loading, selected, chronological } = useContext(AppContext);

  if (loading) {
    return (
      <View>
        <Loader
          text={JSON.stringify(new Date())}
        />
      </View>
    );
  }

  return (
    <div>
      <TopBar />
      <View>
        {selected !== null ? <Image /> : null}
        {chronological ? <Timeline /> : <Scatter />}
      </View>
    </div>
  );
};

export default MainView;
