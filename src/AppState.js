import React, { useState } from "react";
import AppContext from "./AppContext.js";

function AppState(props) {
    const size = 20

    const [loading, setLoading] = useState(true);
    const [endpoint, setEndpoint] = useState('https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-assorted-18a58t9c');
    const [chronological, setChronological] = useState(false);
    const [images, setImages] = useState([]);
    const [selected, setSelected] = useState(null);
    const [totalImages, setTotalImages] = useState(0);
    const [groupSize, setGroupSize] = useState(size);
    const [group, setGroup] = useState(1);

    const stateContext = {
        loading,
        endpoint,
        chronological,
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

    stateContext.toggleEndpoint = () => {
        setLoading(true)
        if (chronological) {
            setChronological(false);
            setEndpoint('https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-assorted-18a58t9c')
        } else {
            setChronological(true);
            setEndpoint(`https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-images-18a58t9c?start=${0}&size=${groupSize}`)
        }
    }

    return (
        <AppContext.Provider value={stateContext}>
            {props.children}
        </AppContext.Provider>
    );
}


export default AppState;