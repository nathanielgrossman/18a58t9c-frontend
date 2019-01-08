import React, { useState } from "react";
import AppContext from "./AppContext.js";

function AppState (props) {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [selected, setSelected] = useState(null);

    const stateContext = {
        loading: loading,
        images: images,
        selected: selected
    }

    stateContext.loadImages = (images) => {
        setImages(images);
        setLoading(false);
    }

    stateContext.select = (index) => {
        setSelected(index)
    }

    return (
        <AppContext.Provider value={stateContext}>
            {props.children}
        </AppContext.Provider>
    );
}


export default AppState;