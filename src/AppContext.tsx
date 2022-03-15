import React from "react";

export type AppContextValues = {
  loading: boolean;
  endpoint: string;
  chronological: boolean;
  images: Array<Image>;
  selected: number | null;
  totalImages: number;
  group: number;
  loadImages: (data: any) => void;
  nextGroup: () => void;
  select: (index: number, id: string) => void;
  deselect: () => void;
  toggleEndpoint: () => void;
};

const AppContext = React.createContext<AppContextValues>({
  loading: true,
  endpoint: '',
  chronological: false,
  images: [],
  selected: null,
  totalImages: 0,
  group: 1,
  loadImages: () => {},
  nextGroup: () => {},
  select: () => {},
  deselect: () => {},
  toggleEndpoint: () => {}
});


export default AppContext
