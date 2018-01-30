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
    console.log("sup");
    this.setState({clicked: true});
  }

  render() {
    return (
        <div className="square" onClick={this.handleClick}></div>
    )
  }
}

export default Square;
