import React from "react";
import FizzBuzzDisplay from "../components/FizzBuzzDisplay";
import Button from "../components/Button.js";

class FizzBuzzBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "apple",
      fizzBuzzVal: 0
    };
  }

  handleChange = event =>
    this.setState({
      value: event.target.value
    });

  updateFizzBuzz = () => {
    const inputVal = Number(this.state.value);
    const isANumber = !isNaN(inputVal);

    if (isANumber) {
      this.setState({
        fizzBuzzVal: inputVal
      });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button onClick={this.updateFizzBuzz}>Get status</Button>
        <FizzBuzzDisplay number={this.state.fizzBuzzVal}></FizzBuzzDisplay>
      </div>
    );
  }
}
export default FizzBuzzBox;
