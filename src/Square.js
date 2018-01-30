import React, { Component } from "react";
import "./index.css";

class Square extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      turn: null
    };
  }

  handleClick = () => {
    if (!this.state.clicked){
      this.setState({
        clicked: true,
        turn: "X"
      });
    } else if (this.state.turn === "X"){
      this.setState({
        clicked: true,
        turn: "O"
      });
    } else {
      this.setState({
        turn: "X"        
      });

    }

  }

  render() {
    return (
        <div className="square" onClick={this.handleClick}>
          <h1>{this.state.turn}</h1>
        </div>
    )
  }
}

export default Square;
