import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  incrementValue = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  sayHello = () => {
    alert("Hello! The counter is being incremented.");
  }
  increment() {
    this.incrementValue();
    this.sayHello();
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  handlePress = (e) => {
    console.log(e);
    alert("I was clicked! Check the console for the synthetic event.");
  }

  render() {
    return (
      <div className="component">
        <h2>Counter</h2>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.handlePress}>OnPress (Synthetic Event)</button>
      </div>
    );
  }
}

export default Counter;
