import axios from 'axios'


 export  const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

 export const getAllEmployees = () =>{
  return axios.get(EMPLOYEE_API_BASE_URL);
}


// export const createEmployeeData = (employee) =>{

//   return axios.post(EMPLOYEE_API_BASE_URL,employee)

// }