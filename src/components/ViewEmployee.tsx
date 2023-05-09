import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { EMPLOYEE_API_BASE_URL } from "../services/EmployeeService";
const ViewEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const employeeIdFromPreviousScreen = async () => {
    // event.preventDefault();
    try {
      const response = await axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
      const responseData = response?.data;
      //   setEmployeeData([response?.data]);
      setFirstName(responseData?.firstName);
      setLastName(responseData?.lastName);
      setEmailId(responseData?.emailId);

      //   console.log("responseData"+JSON.stringify(responseData))

      //   setEmployeeData([JSON.stringify(responseData)]);

      //   console.log("employeeData"+JSON.stringify(responseData))

      //   navigate("/employees");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    employeeIdFromPreviousScreen();
  }, []);

  const { id } = useParams();
  return (
    <div
      style={{ marginTop: "100px",}}
      className="container text-center"
    >
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <h5>Employee id : {id}</h5>
          </div>
          <div className="row">
            <h4>Employee First Name : {firstName}</h4>
          </div>
          <div className="row">
            <h4>Employee Last Name : {lastName}</h4>
          </div>
          <div className="row">
            <h4>Employee Email Id : {emailId}</h4>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
