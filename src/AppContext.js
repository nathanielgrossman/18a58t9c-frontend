import React from "react";

const AppContext = React.createContext({
  loading: true,
  images: [],
  selected: null,
  loadImages: () => {},
  select: () => {}
});


export default AppContext
