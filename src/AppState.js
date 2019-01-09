import React, { useState } from "react";
import AppContext from "./AppContext.js";

function AppState(props) {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [selected, setSelected] = useState(null);
    const [totalImages, setTotalImages] = useState(0);
    const [groupSize, setGroupSize] = useState(20);
    const [group, setGroup] = useState(1);


    const stateContext = {
        loading,
        images,
        selected,
        totalImages,
        groupSize,
        group
    }

    stateContext.loadImages = (data) => {
        setImages(data.images);
        setTotalImages(data.total);
        setLoading(false);
    }

    stateContext.nextGroup = () => {
        axios.get(`https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-images-18a58t9c?start=${groupSize * group}&size=${groupSize}`)
            .then(response => {
                setGroup(group + 1);
                setImages([].concat(images, response.data.images));
                setTotalImages(response.data.total);
            })
    }

    stateContext.select = (index, id) => {
        setSelected(index);
        axios.post('https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/update-views-18a58t9c', { id: id })
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