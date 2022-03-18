import React from "react";
import AppContext, { AppContextValues } from "../AppContext";

type DevContextProviderProps = {
  children: React.ReactNode;
  error: boolean;
};

export const DevContextProvider: React.FC<DevContextProviderProps> = ({
  children,
  error,
}) => {

  const contextValues: AppContextValues = {
    error,
    loading: false,
    chronological: false,
    images: [],
    selected: null,
    totalImages: 0,
    loadNextGroup: () => {},
    select: () => {},
    deselect: () => {},
    toggleMode: () => {},
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
