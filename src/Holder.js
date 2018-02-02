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

  checkWin = () => {
    //check for win conditions
    const squares = this.state.clickedSquares;

    if (squares[0] != null && squares[0] === squares[1] && squares[0] === squares[2]){
      console.log("win across top");
    } else if (squares[3] != null && squares[3] === squares[4] && squares[3] === squares[5]){
      console.log("win across middle");
    } else if (squares[6] != null && squares[6] === squares[7] && squares[6] === squares[8]){
      console.log("win across bottom")
    } else if (squares[0] != null && squares[0] === squares[3] && squares[0] === squares[6]){
      console.log("left vert win");
    } else if (squares[1] != null && squares[1] === squares[4] && squares[1] === squares[7]){
      console.log("middle vert win");
    } else if (squares[2] != null && squares[2] === squares[5] && squares[2] === squares[8]){
      console.log("right vert win");
    } else if (squares[0] != null && squares[0] === squares[4] && squares[0] === squares[8]){
      console.log("left -> right diagnl win");
    } else if (squares[2] != null && squares[2] === squares[4] && squares[2] === squares[6]){
      console.log("right -> left diagnl win");
    }
  }

  liftState = (value) => {
    //make an array with the final X/O
    const squares = this.state.clickedSquares;

    if (!squares[value]){ //if it's null, first click
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

    this.checkWin();
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
