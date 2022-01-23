import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as action from "../store/actions";

const VaccineForm = (props) => {
  const initialState = {
    name: "",
    date: "",
    vaccine: "",
  };

  const [form, setForm] = useState(initialState);

  const route = useNavigate();

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addBenificiary(form);
    setForm(initialState);
    // route("/vaccinelist");
  };

  return (
    <div className="container">
      <h1>Form</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control mb-3"
          value={form.name}
          onChange={handleFormChange}
        />
        <input
          type="text"
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
      </form>
      <br />
      <h3>Vaccine List</h3>
      <table className="table">
        <thead>
          <tr>
            <td>Member</td>
            <td>Date</td>
            <td>Vaccine</td>
          </tr>
        </thead>
        <tbody>
          {props.vaccineList.map((member, i) => {
            return (
              <tr key={i}>
                <td>{member.name}</td>
                <td>{member.date}</td>
                <td>{member.vaccine}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    addBenificiary: (memberData) => dispatch(action.addBenificiary(memberData)),
  };
};
const mapStateToProps = (state) => {
  return {
    vaccineList: state.vaccine.registrant,
  };
};

export default connect(mapStateToProps, mapDispatchProps)(VaccineForm);
