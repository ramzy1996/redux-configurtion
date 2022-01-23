import React, { useReducer, useRef, useState } from "react";

const App = () => {
  const initialState = {
    name: "",
    date: "",
    vaccine: "",
  };

  const initialListState = {
    beneficiaryList: [],
  };

  const [form, setForm] = useState(initialState);
  // const [data, setData] = useState({});

  const [state, dispatch] = useReducer(reducer, initialListState);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_BENIFICIARY":
        const updateMembers = [...state.beneficiaryList, action.payload];
        return {
          ...state,
          beneficiaryList: updateMembers,
        };

      default:
        return state;
    }
  }
  const refMember = useRef();

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BENIFICIARY", payload: form });
    // setData(form);
    setForm(initialState);
  };

  const clearAll = () => {
    setForm(initialState);
    refMember.current.focus();
  };
  return (
    <div className="container">
      <h1>Form</h1>
      <p>{JSON.stringify(state)}</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control mb-3"
          value={form.name}
          ref={refMember}
          onChange={handleFormChange}
        />
        <input
          type="date"
          placeholder="Date"
          name="date"
          className="form-control mb-3"
          value={form.date}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Vaccinee"
          name="vaccine"
          className="form-control mb-3"
          value={form.vaccine}
          onChange={handleFormChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className="btn btn-danger" onClick={clearAll}>
          Clear
        </button>
      </form>
      <ol>
        {state.beneficiaryList.map((member) => {
          return (
            <li>
              {member.name} | {member.date} | {member.vaccine}{" "}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
