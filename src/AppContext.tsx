import React, { useCallback, useState } from "react";

import { trackImageView, useImages } from "./utils/api";


type AppContextProviderProps = {
  children: React.ReactNode;
};

export type AppContextValues = {
  loading: boolean;
  error: boolean;
  chronological: boolean;
  images: Array<Image>;
  selected: number | null;
  totalImages: number;
  loadNextGroup: () => void;
  select: (index: number, id: string) => void;
  deselect: () => void;
  toggleMode: () => void;
};

export const AppContext = React.createContext<AppContextValues>({
  loading: true,
  error: false,
  chronological: false,
  images: [],
  selected: null,
  totalImages: 0,
  loadNextGroup: () => {},
  select: () => {},
  deselect: () => {},
  toggleMode: () => {},
});

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [chronological, setChronological] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const { images, totalImages, loading, error, loadNextGroup } = useImages(chronological);

  const select = useCallback((index: number, id: string) => {
    setSelected(index);
    trackImageView(id)
  }, []);

  const deselect = useCallback(() => {
    setSelected(null);
  }, []);

  const toggleMode = () => setChronological(!chronological);

  const contextValues: AppContextValues = {
    loading,
    error,
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
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppContext;
