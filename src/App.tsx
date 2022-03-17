import React from "react";
import { AppContextProvider } from "./AppContext";

import MainView from "./views/MainView";

const App = () => (
  <div id="app" className="loader">
    <AppContextProvider>
      <MainView />
    </AppContextProvider>
  </div>
);

export default App;
