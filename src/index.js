import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class H20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  H20State(temp) {
    if (temp <= 0) {
      return "ice";
    }
    if (100 <= temp) {
      return "steam";
    }
    return "water";
  }

  render() {
    const { temp } = this.state;

    return (
      <div className={this.H20State(temp)}>
        <h2>
          phase: {this.H20State(temp)},{temp}℃
        </h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlusTenClick}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinusTenClick}>-10</button>
      </div>
    );
  }

  onPlusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 1 });
  };

  onPlusTenClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 10 });
  };

  onMinusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 1 });
  };

  onMinusTenClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 10 });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<H20 />, rootElement);
