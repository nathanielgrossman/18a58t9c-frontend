import React from "react";

export type AppContextValues = {
  loading: boolean;
  endpoint: string;
  chronological: boolean;
  images: any[];
  selected: null;
  totalImages: number;
  groupSize: number;
  group: number;
  loadImages: () => any;
  nextGroup: () => any;
  select: () => any;
  deselect: () => any;
  toggleEndpoint: () => any;
};

const AppContext = React.createContext<AppContextValues>({
  loading: true,
  endpoint: '',
  chronological: false,
  images: [],
  selected: null,
  totalImages: 0,
  groupSize: 20,
  group: 1,
  loadImages: () => {},
  nextGroup: () => {},
  select: () => {},
  deselect: () => {},
  toggleEndpoint: () => {}
});


export default AppContext
