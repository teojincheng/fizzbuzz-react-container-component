import React from "react";

const fruits = [
  "apple",
  "apricot",
  "orange",
  "watermelon",
  "grapes",
  "elderberry"
];

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ""
    };
  }

  updateInput = event => {
    this.setState({
      inputVal: event.target.value
    });
  };

  render() {
    const filteredFruits = fruits.filter(fruit =>
      fruit.startsWith(this.state.inputVal)
    );

    return (
      <div>
        <input
          aria-label="fruitFilter"
          type="text"
          value={this.state.inputVal}
          onChange={this.updateInput}
        />

        {filteredFruits.map(fruit => (
          <div aria-label="fruit" key={fruit}>
            {fruit}
          </div>
        ))}
      </div>
    );
  }
}

export default Filter;
