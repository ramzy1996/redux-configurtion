import React, { Component } from "react";

const Context = React.createContext();
const ConsumerContext = Context.Consumer;

class Provider extends Component {
  state = {
    channel: "Hello World",
    isSubscribed: true,
  };
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          toggleScubscribe: () => {
            this.setState((prevstate) => ({
              isSubscribed: !prevstate.isSubscribed,
            }));
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <h1>Context</h1>
          <CompA />
        </div>
      </Provider>
    );
  }
}

export default App;

const CompA = () => {
  return (
    <div>
      <CompB />
    </div>
  );
};

const CompB = () => {
  return (
    <div>
      <CompC />
    </div>
  );
};

const CompC = () => {
  return (
    <div>
      <CompD />
    </div>
  );
};

const CompD = () => {
  return (
    <div>
      <h2>Consumer</h2>
      <Context.Consumer>
        {(context) => <p>{context.state.channel}</p>}
      </Context.Consumer>
      <Toggle />
      <HooksWay />
    </div>
  );
};

const HooksWay = () => {
  const { state } = React.useContext(ConsumerContext);
  return (
    <div>
      <p>Hooks Way : {state.channel}</p>
    </div>
  );
};

const Toggle = () => {
  return (
    <div>
      <Context.Consumer>
        {(context) => (
          <button onClick={context.toggleScubscribe}>
            {context.state.isSubscribed ? "Unsubscribe" : "Subscribe"}
          </button>
        )}
      </Context.Consumer>
    </div>
  );
};
