import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:3000/employees";
class EmployeeService{
    //get all employees
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/all');
    }
    //create employee
    createEmployee(employee)
    {
        return axios.post(EMPLOYEE_API_BASE_URL + "/", employee);
    }
    getEmployeeById(empId){
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + empId);
    }
    updateEmployee(empId, employee){
        return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${empId}`,employee);
    }
    deleteEmployee(empId){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/delete/" + empId);
    }
}
export default new EmployeeService;