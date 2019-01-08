import React, { useEffect, useContext } from "react";
import AppContext from "./AppContext.js";
import View from "./components/View.js";


function App() {

    const { loadImages } = useContext(AppContext);

    useEffect(() => {
        axios.get('https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-images-18a58t9c')
            .then(response => JSON.parse(response.data.body))
            .then(images => images.reverse())
            .then(images => {
                loadImages(images);
            })
    }, {})

    return (
        <div id="app" className="loader">
          <View />
        </div>
    );
}


export default App;