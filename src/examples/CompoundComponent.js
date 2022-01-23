import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
display: :flex;
background:teal;
`;

const RedContainer = styled.div`
  display: flex;
  width: 300px;
  background: red;
  padding: 8px;
  border-radius: 4px;
  justify-content: center;
`;
const StyledButton = styled.button`
  background: lightseagreen;
  border: 0;
  padding: 0.25em 1em;
  width: 10em;
  color: ${(props) => props.color};
  cursor: pointer;
`;
const App = () => {
  const [count, setCount] = useState(0);

  const incCounter = () => {
    setCount((preveInc) => preveInc + 1);
  };

  return (
    <>
      {/* <p>Increment Value is {count}</p>
      <button onClick={incCounter}>Inc..</button>

      <ShouldDisplay isDisplay={count > 10}>
        <RedContainer>
          <p>Counter value : {count}</p>
        </RedContainer>
      </ShouldDisplay> */}
      <Menu>
        <Tab value="Daily" />
        <Tab value="Weekly" />
        <Tab value="Monthly" />
      </Menu>
    </>
  );
};

const Menu = ({ children }) => {
  let color = "white";
  return (
    <Container>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { color }, null);
      })}
    </Container>
  );
};

const Tab = (props) => {
  return <StyledButton color={props.color}>{props.value}</StyledButton>;
};

const ShouldDisplay = ({ isDisplay = true, children }) =>
  isDisplay ? React.Children.only(children) : null;

export default App;
