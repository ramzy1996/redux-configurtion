import React, { useContext } from "react";
import VaccineContext from "../contexts/vaccineContext";

const VaccineList = () => {
  const { state, dispatch } = useContext(VaccineContext);
  return (
    <table className="table">
      <tr>
        <td>Name</td>
        <td>Date</td>
        <td>Vaccine</td>
        <td>Action</td>
      </tr>
      {state.beneficiaryList.map((member, i) => {
        return (
          <tr key={i}>
            <td>{member.name}</td>
            <td>{member.date}</td>
            <td>{member.vaccine}</td>
            <td>
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: "DELETE_BENIFICIARY", payload: member })
                }
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default VaccineList;
