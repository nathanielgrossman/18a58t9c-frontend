import React from "react";

const AppContext = React.createContext({
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
