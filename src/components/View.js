import React, { useContext } from "react";
import AppContext from "../AppContext.js";
import Timeline from "./Timeline.js";

function View() {

    const { loading } = useContext(AppContext);

    if (loading) {
        return null;
    }

    return (
        <div id="view">
        <Timeline />
      </div>
    );

}

export default View;