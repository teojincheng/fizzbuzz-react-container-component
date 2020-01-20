import React from "react";
import FizzBuzzDisplay from "../components/FizzBuzzDisplay";
import NumberDisplay from "../components/NumberDisplay";
import Button from "../components/Button";
import "../components/Button.css";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  increaseByOne = number => {
    this.setState({ value: this.state.value + 1 });
    //return number + 1;
  };

  decreaseByOne = number => {
    this.setState({ value: this.state.value - 1 });
    //return number - 1;
  };

  render() {
    return (
      <div>
        <Button className="color" onClickFunction={this.increaseByOne}>
          +
        </Button>
        <FizzBuzzDisplay number={this.state.value} />
        <NumberDisplay number={this.state.value} />
        <Button onClickFunction={this.decreaseByOne}>-</Button>
      </div>
    );
  }
}

export default Counter;
