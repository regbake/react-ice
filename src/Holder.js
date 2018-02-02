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

  liftState = (value) => {
    //make an array with the final X/O
    const squares = this.state.clickedSquares;
    console.log(value, "from liftstate", squares);

    if (!squares[value]){
      squares[value] = "X";
      this.setState({
        clickedSquares: squares
      });
    } else if (squares[value] === "X"){
      squares[value] = "O";
      this.setState({
        clickedSquares: squares
      });
    } else {
      squares[value] = "X";
      this.setState({
        clickedSquares: squares
      });
    }

    console.log(value, "from liftstate", squares);
  }

  render() {
    return (
      <div>
        <div className="holder">
          <Square value={0} liftState={this.liftState} turn={this.state.clickedSquares[0]} />
          <Square value={1} liftState={this.liftState} turn={this.state.clickedSquares[1]} />
          <Square value={2} liftState={this.liftState} turn={this.state.clickedSquares[2]} />
          <Square value={3} liftState={this.liftState} turn={this.state.clickedSquares[3]} />
          <Square value={4} liftState={this.liftState} turn={this.state.clickedSquares[4]} />
          <Square value={5} liftState={this.liftState} turn={this.state.clickedSquares[5]} />
          <Square value={6} liftState={this.liftState} turn={this.state.clickedSquares[6]} />
          <Square value={7} liftState={this.liftState} turn={this.state.clickedSquares[7]} />
          <Square value={8} liftState={this.liftState} turn={this.state.clickedSquares[8]} />
        </div>
      </div>
    )
  }
}

export default Holder;
