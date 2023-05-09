import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { EMPLOYEE_API_BASE_URL } from "../services/EmployeeService";

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const navigate = useNavigate();

  const firtNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHanlder = (event) => {
    setEmailId(event.target.value);
  };

  const saveEmployeeHandler = async (event) => {
    event.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    try {
      const response = await axios.post(EMPLOYEE_API_BASE_URL, employee);
      console.log("response data" + JSON.stringify(response?.data));
      setFirstName("");
      setLastName("");
      setEmailId("");
      navigate("/employees");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={{ marginTop: "40px" }}
          >
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body"></div>

            <form>
              <div className="form-group">
                <label className="form-label">First Name:</label>
                <input
                  type={"text"}
                  placeholder="First Name"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={firtNameHandler}
                />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ marginTop: "10px" }}>
                  Last Name:
                </label>
                <input
                  type={"text"}
                  placeholder="Last Name"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={lastNameHandler}
                />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ marginTop: "10px" }}>
                  Email:
                </label>
                <input
                  type={"email"}
                  placeholder="Email"
                  name="Email"
                  className="form-control"
                  value={emailId}
                  onChange={emailHanlder}
                />
              </div>
              <div style={{ margin: "10px" }} className="text-center">
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={saveEmployeeHandler}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => { navigate("/employees");}}
                  style={{ marginLeft: "10px" }}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
