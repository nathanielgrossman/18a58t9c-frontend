import React, { useEffect, useContext } from "react";
import AppContext from "./AppContext.js";
import View from "./components/View.js";


function App() {

  const { loadImages, groupSize, endpoint } = useContext(AppContext);

  useEffect(() => {
    axios.get(endpoint)
      .then(response => loadImages(response.data))
  }, [endpoint])

  return (
    <div id="app" className="loader">
      <View />
    </div>
  );
}


export default App;