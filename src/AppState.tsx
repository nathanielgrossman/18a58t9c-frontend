import React, { useState } from "react";
import axios from "axios";

import AppContext, { AppContextValues } from "./AppContext";

type AppStateProps = {
  children: React.ReactNode;
};
const AppState: React.FC<AppStateProps> = ({children}) => {
    const size = 20

    const [loading, setLoading] = useState(true);
    const [endpoint, setEndpoint] = useState('https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-assorted-18a58t9c');
    const [chronological, setChronological] = useState(false);
    const [images, setImages] = useState<Array<Image>>([]);
    const [selected, setSelected] = useState<number | null>(null);
    const [totalImages, setTotalImages] = useState<number>(0);
    const [groupSize, setGroupSize] = useState<number>(size);
    const [group, setGroup] = useState(1);

    const loadImages = (data: ImageQueryResult) => {
        setImages(data.images);
        setTotalImages(data.total);
        setLoading(false);
    }

    const nextGroup = () => {
        axios.get(`https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-images-18a58t9c?start=${groupSize * group}&size=${groupSize}`)
            .then(response => {
                setGroup(group + 1);
                setImages({...images, ...response.data.images});
                setTotalImages(response.data.total);
            })
    }

    const select = (index: number, id: string) => {
        setSelected(index);
        axios.post('https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/update-views-18a58t9c', { id: id })
    }

    const deselect = () => {
        setSelected(null)
    }

    const toggleEndpoint = () => {
        setLoading(true)
        if (chronological) {
            setChronological(false);
            setEndpoint('https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-assorted-18a58t9c')
        } else {
            setChronological(true);
            setEndpoint(`https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-images-18a58t9c?start=${0}&size=${groupSize}`)
        }
    }

    const stateContext: AppContextValues = {
      loading,
      endpoint,
      chronological,
      images,
      selected,
      totalImages,
      groupSize,
      group,
      loadImages,
      nextGroup,
      select,
      deselect,
      toggleEndpoint,
    };

    return (
        <AppContext.Provider value={stateContext}>
            {children}
        </AppContext.Provider>
    );
}


export default AppState;