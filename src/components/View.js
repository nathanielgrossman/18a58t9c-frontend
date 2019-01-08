import React, { useContext } from "react";
import AppContext from "../AppContext.js";
import Timeline from "./Timeline.js";
import Image from "./Image.js";

function View() {

    const { loading, selected } = useContext(AppContext);

    if (loading) {
        return null;
    }

    return (
      <div id="view">
        { selected !== null ? <Image /> : null }
        <Timeline />
      </div>
    );

}

export default View;