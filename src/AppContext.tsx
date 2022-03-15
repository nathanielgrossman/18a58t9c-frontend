import React from "react";

export type AppContextValues = {
  loading: boolean;
  chronological: boolean;
  images: Array<Image>;
  selected: number | null;
  totalImages: number;
  loadNextGroup: () => void;
  select: (index: number, id: string) => void;
  deselect: () => void;
  toggleMode: () => void;
};

const AppContext = React.createContext<AppContextValues>({
  loading: true,
  chronological: false,
  images: [],
  selected: null,
  totalImages: 0,
  loadNextGroup: () => {},
  select: () => {},
  deselect: () => {},
  toggleMode: () => {}
});


export default AppContext
