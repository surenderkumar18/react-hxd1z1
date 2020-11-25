import React from "react";

class Throttle extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  startIncrement = () => {
    var intervalId = setInterval(this.timer, 100);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  };
  timer = () => {
    // setState method is used to update the state
    this.setState({ count: this.state.count + 1 });
  };
  start = () => {
    this.startIncrement();
  };
  stop = () => {
    clearInterval(this.state.intervalId);
  };
  render() {
    return (
      <div>
        <button onClick={this.start}>{this.state.count}</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}
export default Throttle;
