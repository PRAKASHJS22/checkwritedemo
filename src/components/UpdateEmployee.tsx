import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import { EMPLOYEE_API_BASE_URL } from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  //   const routerEmpoyeeId =  JSON.stringify(id);
  //   console.log("---------" + routerEmpoyeeId);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const [employeeData, setEmployeeData] = useState([]);

  const navigate = useNavigate();

  const employeeIdFromPreviousScreen = async (event) => {
    // event.preventDefault();

    try {
      const response = await axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
      const responseData = response?.data;
      //   setEmployeeData([response?.data]);
      setFirstName(responseData?.firstName);
      setLastName(responseData?.lastName);
      setEmailId(responseData?.emailId);

      //   console.log("responseData"+JSON.stringify(responseData))

      setEmployeeData([JSON.stringify(responseData)]);

      //   console.log("employeeData"+JSON.stringify(responseData))

      //   navigate("/employees");
    } catch (error) {
      console.log(error);
    }
  };

  const updatedEmployee = async (id) => {
    // const newData = JSON.parse(employeeData);

    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.put(
        EMPLOYEE_API_BASE_URL + "/" + id,
        employee
      );

      console.log("response data" + JSON.stringify(response?.data));

      navigate("/employees");
    } catch (error) {
      console.log("error occured " + error);
    }
  };

  useEffect(
    (id) => {
      employeeIdFromPreviousScreen(id);
    },
    [id]
  );

  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={{ marginTop: "40px" }}
          >
            <h3 className="text-center">Update Employee</h3>
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
                  onChange={(e) => setFirstName(e.target.value)}
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
                  onChange={(e) => setLastName(e.target.value)}
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
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div style={{ margin: "10px" }} className="text-center">
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={() => updatedEmployee(id)}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {}}
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

export default UpdateEmployee;
