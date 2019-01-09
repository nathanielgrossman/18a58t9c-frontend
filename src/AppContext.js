import React from "react";

const AppContext = React.createContext({
  loading: true,
  images: [],
  selected: null,
  totalImages: 0,
  groupSize: 20,
  group: 1,
  loadImages: () => {},
  nextGroup: () => {},
  select: () => {},
  deselect: () => {}
});


export default AppContext
