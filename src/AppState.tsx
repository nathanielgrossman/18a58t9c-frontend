import React, { useState } from "react";
import axios from "axios";

import AppContext, { AppContextValues } from "./AppContext";
import {
  UPDATE_VIEWS_URL,
} from "./utils/urlUtils";
import { useImages } from "./hooks/api";

type AppStateProps = {
  children: React.ReactNode;
};

const AppState: React.FC<AppStateProps> = ({ children }) => {
  const [chronological, setChronological] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const { images, totalImages, loading, loadNextGroup } = useImages(chronological);


  const select = (index: number, id: string) => {
    setSelected(index);
    axios.post(UPDATE_VIEWS_URL, { id: id });
  };

  const deselect = () => {
    setSelected(null);
  };

  const toggleMode = () => setChronological(!chronological);

  const stateContext: AppContextValues = {
    loading,
    chronological,
    images,
    selected,
    totalImages,
    loadNextGroup,
    select,
    deselect,
    toggleMode,
  };

  return (
    <AppContext.Provider value={stateContext}>{children}</AppContext.Provider>
  );
};

export default AppState;
