import React, { useState } from "react";
import axios from "axios";

import AppContext, { AppContextValues } from "./AppContext";
import {
  CHRONOLOGICAL_VIEW_URL,
  getGroupURL,
  SCATTER_VIEW_URL,
  UPDATE_VIEWS_URL,
} from "./utils/urlUtils";

type AppStateProps = {
  children: React.ReactNode;
};

const AppState: React.FC<AppStateProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [endpoint, setEndpoint] = useState(SCATTER_VIEW_URL);
  const [chronological, setChronological] = useState(false);
  const [images, setImages] = useState<Array<Image>>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [group, setGroup] = useState(1);

  const loadImages = (data: ImageQueryResult) => {
    setImages(data.images);
    setTotalImages(data.total);
    setLoading(false);
  };

  const nextGroup = () => {
    axios.get(getGroupURL(group)).then((response) => {
      setGroup(group + 1);
      setImages([...images, ...response.data.images]);
      setTotalImages(response.data.total);
    });
  };

  const select = (index: number, id: string) => {
    setSelected(index);
    axios.post(UPDATE_VIEWS_URL, { id: id });
  };

  const deselect = () => {
    setSelected(null);
  };

  const toggleEndpoint = () => {
    setLoading(true);
    if (chronological) {
      setChronological(false);
      setEndpoint(SCATTER_VIEW_URL);
    } else {
      setChronological(true);
      setEndpoint(CHRONOLOGICAL_VIEW_URL);
    }
  };

  const stateContext: AppContextValues = {
    loading,
    endpoint,
    chronological,
    images,
    selected,
    totalImages,
    group,
    loadImages,
    nextGroup,
    select,
    deselect,
    toggleEndpoint,
  };

  return (
    <AppContext.Provider value={stateContext}>{children}</AppContext.Provider>
  );
};

export default AppState;
