import React, { useEffect, useState } from "react";

const App = () => {
  const [day, setIncrement] = useState(1);
  const [pocketMoney, setPocketMoney] = useState(5000);
  const incDay = () => {
    if (day % 5 === 0) {
      setPocketMoney((prevmoney) => prevmoney + 500);
    }
    setIncrement((preveDay) => preveDay + 1);
  };
  // const decCounter = () => {
  //   setCount((preveInc) => preveInc - 1);
  // };
  // const resetCounter = () => {
  //   setCount(0);
  // };
  // useEffect(() => {
  //   console.log("Firing Useeffect");
  // });
  console.log("Rerendering app..");
  return (
    <>
      {/* <p>Increment Value is {count}</p> */}
      <p>Day {day}</p>
      <button onClick={incDay}>Inc..</button>
      {/* <button onClick={decCounter}>Dec..</button> */}
      {/* <button onClick={resetCounter}>Reset.</button> */}
      <ReactMemoPocketMoney money={pocketMoney} />
    </>
  );
};

const PocketMoney = ({ money }) => {
  console.log("Rendering pocket money..");
  return <p>Pocket Money : {money}</p>;
};
function isPropsEqual(prevPorps, nextProps) {
  return prevPorps.money === nextProps.money;
  // return false;
}

// const ReactMemoPocketMoney = React.memo(PocketMoney);
const ReactMemoPocketMoney = React.memo(PocketMoney, isPropsEqual);

export default App;
