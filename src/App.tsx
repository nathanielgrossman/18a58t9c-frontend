import React, { useEffect, useContext } from "react";
import AppContext from "./AppContext";
import View from "./components/View";


function App() {

  const { loadImages, endpoint } = useContext(AppContext);

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