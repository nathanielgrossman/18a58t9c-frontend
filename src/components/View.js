import React, {Component} from "react";
import Timeline from "./Timeline.js";

class View extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div id="view">
        <Timeline />
      </div>
    );
  }
}

export default View; 