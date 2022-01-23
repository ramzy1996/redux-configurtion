import React, { Component } from "react";
// import "./App.css";
import styled from "styled-components";

const BlankCard = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 6px;
  width: 400px;
`;

const ColoredCard = styled(BlankCard)`
  background-color: ${({ counterValue }) =>
    counterValue > 50 ? "yellow" : "red"};
`;

class App extends Component {
  state = {
    increment: 0,
  };
  incrementMe = () => {
    this.setState((prevState) => {
      return {
        increment: prevState.increment + 1,
      };
    });
  };

  render() {
    console.log("Rendering");
    return (
      <>
        <p>Hello World</p>
        <p>{this.state.increment}</p>
        <button onClick={this.incrementMe}>Click Me</button>

        <Counter counterValue={this.state.increment} />
      </>
    );
  }
}
const Counter = ({ counterValue }) => {
  const DynamicCard = counterValue > 0 ? ColoredCard : BlankCard;
  return (
    <div>
      <DynamicCard counterValue={counterValue}>
        <p>{counterValue}</p>
      </DynamicCard>
    </div>
  );
};

const CounterDisplay = (props) => (
  <div>
    <BlankCard counterValue={props.counterValue}>
      <p>{props.counterValue}</p>
    </BlankCard>
  </div>
);

export default App;
