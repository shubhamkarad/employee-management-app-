import React, { Component } from 'react';
import EmployeeService from '../services/employeeService';

class UpdateEmployeeComponent extends Component {
     constructor(props)
    {
        super(props);
        this.state={
            empId : this.props.match.params.id,
            empName:"",
            empSalary:""
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.empId).then((res)=>{
            let employee = res.data.message[0];
            this.setState({
                empName : employee.name, 
                empSalary : employee.salary, 
            })
            console.log("Employee =>" +JSON.stringify(employee));
        })
    }
    updateEmployee=(e)=>{
        e.preventDefault();
        const employee = { name:this.state.empName, salary:this.state.empSalary}
        console.log('employee =>' +JSON.stringify(employee));
        

            EmployeeService.updateEmployee(this.state.empId,employee).then((res) => {
            this.props.history.push('/employees');
        });
        // employeeService.createEmployee(employee).then(res=>{
        //     this.props.history.push("/employees");
        // }
        // )
    }
    cancel(){
        this.props.history.push("/employees");
    }
    //Event Handling
    changeIdHandler = (e) => {
        this.setState({ empId: e.target.value});
    }
    changeNameHandler = (e) => {
        this.setState({ empName: e.target.value});
    }
    changeSalaryHandler = (e) => {
        this.setState({ empSalary: e.target.value});
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                   <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <div className="form-group">
                                <label>Id : </label>
                                <input placeholder="your id" name="id" className="form-control"
                                value={this.state.empId || ''} onChange={this.changeIdHandler} readOnly={true}></input>
                            </div>
                                <div className="form-group">
                                <label>Name : </label>
                                <input placeholder="your name" name="name" className="form-control"
                                value={this.state.empName || ''} onChange={this.changeNameHandler}></input>
                            </div>
                                <div className="form-group">
                                <label>Salary : </label>
                                <input placeholder="your Salary" name="salary" className="form-control"
                                value={this.state.empSalary || ''} onChange={this.changeSalaryHandler}></input>
                            </div>
                            <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}>Cancel</button>
                        </div>
                    </div> 
                </div>
              </div>      
           </div>
        );
    }
}
export default UpdateEmployeeComponent;