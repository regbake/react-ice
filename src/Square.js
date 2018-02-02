import React, { Component } from "react";
import "./index.css";

class Square extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    const value = this.props.value;
    this.props.liftState(value);
  }

  render() {
    return (
        <div className="square" onClick={this.handleClick}>
          <h1>{this.props.turn}</h1>
        </div>
    )
  }
}

export default Square;
