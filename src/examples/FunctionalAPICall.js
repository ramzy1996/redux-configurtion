import React, { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setLoading(false);
      setData(await response.json());
    }
    getData();
  }, []);
  return (
    <div>
      <p>API Call</p>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map((tododata, i) => {
            return (
              <li key={tododata.i}>
                {tododata.title}-{tododata.completed ? "Done" : "not done"}{" "}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default App;

/*
<div>
        <p>API Call</p>
        {this.state.laoding ? (
          "Loading..."
        ) : (
          <ul>
            {this.state.todosdata.map((tododata, i) => {
              return (
                <li key={tododata.i}>
                  {tododata.title}-{tododata.completed ? "Done" : "not done"}{" "}
                </li>
              );
            })}
          </ul>
        )}
      </div>
*/
