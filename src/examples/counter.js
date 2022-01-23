import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const incCounter = () => {
    setCount((preveInc) => preveInc + 1);
  };
  const decCounter = () => {
    setCount((preveInc) => preveInc - 1);
  };
  const resetCounter = () => {
    setCount(0);
  };
  useEffect(() => {
    console.log("Firing Useeffect");
  });
  console.log("Rerendering..");
  return (
    <>
      <p>Increment Value is {count}</p>
      <button onClick={incCounter}>Inc..</button>
      <button onClick={decCounter}>Dec..</button>
      <button onClick={resetCounter}>Reset.</button>
    </>
  );
};

export default App;
