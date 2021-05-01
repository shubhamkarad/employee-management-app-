import React, { Component } from 'react';
import EmployeeService from '../services/employeeService';

class ViewComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            empId : this.props.match.params.id,
            employee:{}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.empId).then(res=>{
            // this.setState({employee : res.data.message});
             let employee = res.data.message[0];
            this.setState({
                empName : employee.name, 
                empSalary : employee.salary, 
            })
            console.log("Employee =>" +JSON.stringify(employee));
        })
        }
    render() {
        return (
            <div><br></br>
                <div className="card col-md-6 offset-md-3"><br></br>
                <h3 className="text-center">View employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Employee Id : </label>
                        <div className="form-control">{this.state.empId}</div>
                    </div><br></br>
                    <div className="row">
                        <label>Employee name : </label>
                        <div className="form-control">{this.state.empName}</div>
                    </div><br></br>
                    <div className="row">
                        <label >Employee Salary : </label>
                        <div className="form-control">{this.state.empSalary}</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ViewComponent;