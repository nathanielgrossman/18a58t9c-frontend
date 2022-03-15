import React, { useEffect, useContext } from "react";
import axios from "axios";

import AppContext from "./AppContext";
import View from "./components/View";


function App() {
  return (
    <div id="app" className="loader">
      <View />
    </div>
  );
}


export default App;