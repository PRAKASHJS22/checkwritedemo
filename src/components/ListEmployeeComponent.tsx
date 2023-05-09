import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EMPLOYEE_API_BASE_URL } from "../services/EmployeeService";
// import useWindowDimensions from "../components/windowSize";

import Headers from "./headers/headers";

function employeemployeeComponent(): JSX.Element {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  // const { height, width } = useWindowDimensions();

  const getAllEmployees = async () => {
    try {
      const data = await axios.get(EMPLOYEE_API_BASE_URL);

      setEmployees(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addEmployee = () => {
    navigate("/add-employee");
  };

  const editEmployee = (id:number) => {
    navigate(`/update-employee/${id}`);
  };

  const deleteEmployee = async (id:number) => {
    try {
      const data = await axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);

      setEmployees(employees.filter((employee) => employee?.id !== id));

      // getAllEmployees();
      console.log(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const viewEmployee = (id:number) => {
    navigate(`/view-employee/${id}`);
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
   
    <div className="container">
      
      <h2 className="text-center"> Employees Table</h2>

      <div
        style={{ marginTop: "2vh", marginInline: "2vw", marginBottom: "2vh" }}
      >
        <button className="btn btn-primary" onClick={addEmployee}>
          {" "}
          Add Employee
        </button>
      </div>
      <div className="row">
        <table className=" table table-stripped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Employee First Name </th>
              <th>Employee Last Name </th>
              <th>Employee Email ID </th>
              <th>Employee Actions </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee?.id}>
                <td>{employee?.firstName}</td>
                <td>{employee?.lastName}</td>
                <td>{employee?.emailId}</td>
                <td className="text-center" id="button">
                  <button
                    onClick={() => editEmployee(employee.id)}
                    className="btn btn-info"
                    type="button"
                    style={{ color: "#fff", marginLeft: "1em" }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="btn btn-danger"
                    type="button"
                    style={{ color: "#fff", marginLeft: "1em" }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => viewEmployee(employee.id)}
                    className="btn btn-secondary"
                    type="button"
                    style={{ color: "#fff", marginLeft: "1em" }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default memo(employeemployeeComponent);
