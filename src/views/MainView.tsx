import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../AppContext";
import TimelineView from "./TimelineView";
import Image from "../components/Image";
import ScatterView from "./ScatterView";
import Loader from "../components/Loader";
import TopBar from "../components/TopBar";

const View = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainView: React.FC = () => {
  const { loading, selected, chronological, error } = useContext(AppContext);

  if (error) {
    return (
      <View>
        <Loader text={"an error has occured"} />
      </View>
    );
  }

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
        {chronological ? <TimelineView /> : <ScatterView />}
      </View>
    </div>
  );
};

export default MainView;
