import React, { useContext } from "react";
import AppContext from "../AppContext";
import Timeline from "./Timeline";
import Image from "./Image";
import Scatter from "./Scatter";
import Loader from "./Loader";
import TopBar from "./TopBar";

const View: React.FC = () => {
  const { loading, selected, chronological } = useContext(AppContext);

  if (loading) {
    return (
      <div id="view">
        <Loader
          text={chronological ? JSON.stringify(new Date()) : "loading..."}
        />
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <div id="view">
        {selected !== null ? <Image /> : null}
        {chronological ? <Timeline /> : <Scatter />}
      </div>
    </div>
  );
};

export default View;
