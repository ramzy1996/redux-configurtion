import React, { useState, useContext, useReducer } from "react";
import VaccineForm from "./components/vaccineForm";
import VaccineList from "./components/vaccineList";
import VaccineContext from "./contexts/vaccineContext";
import VaccineReducer from "./reducers/vaccineReducer";

const App = () => {
  const initialState = useContext(VaccineContext);
  const [state, dispatch] = useReducer(VaccineReducer, initialState);
  return (
    <VaccineContext.Provider value={{state,dispatch}}>
      <div>
        <h3>vaccine Lists</h3>
        <VaccineForm />
        <h3>Registrant</h3>
        <VaccineList />
      </div>
    </VaccineContext.Provider>
  );
};

export default App;
