import React from "react";
import { AppContextProvider } from "./AppContext";

import View from "./components/View";

const App = () => (
  <div id="app" className="loader">
    <AppContextProvider>
      <View />
    </AppContextProvider>
  </div>
);

export default App;
