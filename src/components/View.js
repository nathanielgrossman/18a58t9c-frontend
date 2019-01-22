import React, { useContext } from "react";
import AppContext from "../AppContext.js";
import Timeline from "./Timeline.js";
import Image from "./Image.js";
import Scatter from "./Scatter.js";
import Loader from "./Loader.js";


function View() {

    const { loading, selected, chronological } = useContext(AppContext);

    if (loading) {
        return (
        <div id="view">
          <Loader text={chronological ? JSON.stringify(new Date()) : 'loading...'} /> 
        </div>
        )
    }

    return (
      <div id="view">
        { selected !== null ? <Image /> : null }
        { chronological ? <Timeline /> : <Scatter /> }
      </div>
    );

}

export default View;