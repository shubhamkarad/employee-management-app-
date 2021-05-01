import React, { Component } from 'react';
import employeeService from '../services/employeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }
    //view employee
    viewEmployee(empId){
           this.props.history.push(`/view-employee/${empId}`);
    }
    //delete employee
    deleteEmployee(empId){
            employeeService.deleteEmployee(empId).then(res =>{
                this.setState({employees:this.state.employees.filter(employee => employee.empId !== empId)});
            })
    }
    //call update employee page
    editEmployee(empId){
        this.props.history.push(`/update-employee/${empId}`);
    }
    //axios call
    componentDidMount(){
        employeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data.message})
        });
    }
    //add EMployee method
    addEmployee(){
        // provide history object through props
            this.props.history.push('/add-employee');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee Management System</h2>
                <div className="container">
                 <button className="btn btn-success" style={{marginLeft:'-30px'}} onClick={this.addEmployee}>Add Employee</button>
                 </div>   <br/>
                <div className="row"> 
                    <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Employee Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(employee=>(
                                <tr key={employee.id}>
                                    <td>{employee.empId}</td>
                                    <td>{employee.empName}</td>
                                    <td>{employee.empSalary}</td>
                                    <td>
                                        <button onClick={()=>this.editEmployee(employee.empId)} className="btn btn-info">Update</button>
                                        <button onClick={()=>this.deleteEmployee(employee.empId)} className="btn btn-danger" style={{marginLeft:'20px'}}>Delete</button>
                                        <button onClick={()=>this.viewEmployee(employee.empId)} className="btn btn-primary" style={{marginLeft:'20px'}}>View</button>
                                    </td>
                                </tr>
                            )
                            ) 
                        }
                    </tbody>
                    
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;