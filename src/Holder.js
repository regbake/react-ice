import React, {Component} from "react";
import "./index.css";
import Square from "./Square";

class Holder extends Component {
  constructor(props){
    super(props);
    this.state = {
      clickedSquares: Array(9).fill(null)
    };
  }

  liftState = (val) => {
    //make an array with the final X/O
    console.log(val)
    const squares = this.state.clickedSquares;
    const value = val[0];
    const turn = val[1];
    squares[value] = turn;
    this.setState({
      clickedSquares: squares
    });

    console.log(this.state.clickedSquares);

  }

  render() {
    return (
      <div>
        <div className="holder">
          <Square value={0} liftState={this.liftState} />
          <Square value={1} liftState={this.liftState} />
          <Square value={2} liftState={this.liftState} />
          <Square value={3} liftState={this.liftState} />
          <Square value={4} liftState={this.liftState} />
          <Square value={5} liftState={this.liftState} />
          <Square value={6} liftState={this.liftState} />
          <Square value={7} liftState={this.liftState} />
          <Square value={8} liftState={this.liftState} />
        </div>
      </div>
    )
  }
}

export default Holder;
