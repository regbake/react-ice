import React, {Component} from "react";
import "./index.css";
import Square from "./Square";

class Holder extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 9
    };
  }

  render() {
    return (
      <div>
        <div className="holder">
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </div>
    )
  }
}

export default Holder;
