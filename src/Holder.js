import React, {Component} from "react";
import "./index.css";
import Square from "./Square";

class Holder extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="holder">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

export default Holder;
