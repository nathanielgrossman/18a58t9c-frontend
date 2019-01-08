import React, { useState } from "react";
import AppContext from "./AppContext.js";

function AppState(props) {
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

    stateContext.select = (index, id) => {
        setSelected(index);
        axios.post('https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/update-views-18a58t9c', { id: id })
            .then(response => console.log("updated", id))
    }

    stateContext.deselect = () => {
        setSelected(null)
    }

    return (
        <AppContext.Provider value={stateContext}>
            {props.children}
        </AppContext.Provider>
    );
}


export default AppState;