import React, { useEffect, useState } from "react";
// import styled from "styled-components";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [essentialItems, setEssentialItems] = useState([]);

  const randInt = () => {
    return Math.floor(Math.random() * 10000 + 1).toString();
  };
  const addToEssItemList = () => {
    setEssentialItems(
      essentialItems.concat({
        id: randInt(),
        product: newItem,
      })
    );
    setNewItem("");
  };

  // const deleteItem = (id) => {
  //   setEssentialItems(essentialItems.filter((eitem) => eitem.id !== id));
  // };

  const deleteItem = React.useCallback(
    (id) => {
      setEssentialItems(essentialItems.filter((eitem) => eitem.id !== id));
    },
    [essentialItems]
  );

  const handleNewInput = (e) => {
    setNewItem(e.target.value);
  };
  console.log("App");

  return (
    <>
      <div>
        <input type="text" value={newItem} onChange={handleNewInput} />
        <button onClick={addToEssItemList}>Add to essential list</button>

        <EssList essentiallist={essentialItems} onDelete={deleteItem} />
      </div>
    </>
  );
};

const EssList = ({ essentiallist, onDelete }) => {
  console.log("EssList");
  return (
    <ol>
      {essentiallist.map((item) => (
        <EssItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ol>
  );
};
// const ReactMemoEssList = React.memo(EssList);

const EssItem = ({ item, onDelete }) => {
  console.log("EssItems");
  return (
    <li>
      Item: {item.product}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};
// const ReactMemoEssItem = React.memo(EssItem);

export default App;
