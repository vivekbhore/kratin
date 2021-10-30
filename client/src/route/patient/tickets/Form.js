import React from "react";
import axios from "../../../config/axios";
import Select from "react-select";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { connect } from "react-redux";


class TicketForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.ticket);
    this.state = {
      code: props.ticket ? props.ticket.code : "",
      customer: props.ticket ? props.ticket.customer._id : "",
      department: props.ticket ? props.ticket.department._id : "",
      emps: [],
      employee: props.ticket
        ? props.ticket.employees.map((option) =>
            Object.assign(
              {},
              {
                id: option._id,
                value: option._id,
                label: option.name,
                deptId: option.department,
              }
            )
          )
        : [],
      employeesnew: [],
      message: props.ticket ? props.ticket.message : "",
      priority: props.ticket ? props.ticket.priority : "",
      isResolved: props.ticket ? props.ticket.isResolved : "",
      
    
    };
  }
  handleChange = async (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "department") {
      console.log(e.target.value);
      // var arr = []

      const test = await this.state.emps.filter((employee) => {
        console.log(employee);
        if (employee.deptId === e.target.value) {
          return employee;
        }
      });
      //  arr.push(test)

      this.setState({
        employeesnew: test,
      });
      console.log("employeesnew", this.state.employeesnew);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      code:this.props.fromnew=="fromnew"? this.props.gencpassword:this.state.code,
      customer: this.state.customer? this.state.customer:"6127236b6030eb0b400608a1",
      department: this.state.department? this.state.department:"60ffbd59c32d8b4678bc4072",
      employees: this.state.employee? this.state.employee:[{id:"61004b665ded5e36f0b67e86"}],
      message: this.state.message,
      priority: this.state.priority?this.state.priority:"medium",
      isResolved: this.state.isResolved,
      doctors:[],
      empviv:"61004b665ded5e36f0b67e86",
      doctviv:"6114066484e79038f41849f9"
    };
    this.props.ticket && (formData.id = this.props.ticket._id);
    this.props.handleSubmit(formData);
    console.log(formData);
  };

  componentDidMount() {

    console.log(this.props.user);
    console.log(this.props.user._id);
   
    axios
      .get("/employees", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const employees = response.data;
        let emps = [];
        employees.map((employee) => {
          return emps.push({
            id: employee._id,
            value: employee._id,
            label: employee.name,
            deptId: employee.department._id,
          });
        });
        this.setState({ emps });
      });
  }

  handleMultiChange = async (option) => {
    console.log(option)
    // console.log(this.state.employeesnew);


      if (option === null) {
        this.setState(() => {
           while (this.state.employee.length) {
             this.state.employee.pop();
           }
          // this.state.employee.splice(0, this.state.employee.length);
        });
      } else {
        // this.state.employee.splice(0, this.state.employee.length);
         while (this.state.employee.length) {
           this.state.employee.pop();
         }
        option.map((it) => {
          this.state.employee.push(it);
        });
      }
    //   if (this.state.employeesnew.length !== 0) {
    //     await this.state.employeesnew.map((itemo) => {
    //       this.setState(() => {
    //         console.log(option.id);
    //         this.state.employee.push(itemo);
    //         this.state.employeesnew.splice(0, this.state.employeesnew.length);
    //       });
    //     });
    //   } else {

    //      await option.map((itemo) => {
    //      const index = this.state.employee.indexOf(itemo);
    //      if (index > -1) {
    //        this.state.employee.splice(index);
    //      }
    //        this.setState(() => {
    //          console.log(itemo);
    //          this.state.employee.push(itemo);
    //        });
    //      });

    //   }
    // }

    console.log("employee", this.state.employee);
    // console.log("option", option);
    // //   }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          {this.props.fromnew=="fromnew" && (
            <FormGroup>
            <Label htmlFor="code">Code</Label>
            <Input
              type="text"
              id="code"
              value={this.props.gencpassword}
              onChange={this.handleChange}
              name="code"
              disabled
            />
          </FormGroup>
          )}
          {/* <FormGroup>
            <Label htmlFor="code">Code</Label>
            <Input
              type="text"
              id="code"
              value={this.state.code}
              onChange={this.handleChange}
              name="code"
            />
          </FormGroup> */}

          {/* <FormGroup>
            <Label htmlFor="customer">Customer</Label>
            <Input
              type="select"
              id="customer"
              value={this.state.customer}
              onChange={this.handleChange}
              name="customer"
            >
              <option value="">select</option>
              {this.props.customers.map((customer) => {
                return (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}{" "}
                  </option>
                );
              })}
            </Input>
          </FormGroup> */}

          {/* <FormGroup>
            <Label htmlFor="department">Department</Label>
            <Input
              type="select"
              id="department"
              value={this.state.department}
              onChange={this.handleChange}
              name="department"
            >
              <option value="">select</option>
              {this.props.departments.map((department) => {
                return (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                );
              })}
            </Input>
          </FormGroup> */}

          {/* <label>Employees</label>
          <Select
            name="employee"
            placeholder="Select"
            defaultValue={this.state.employee}
            options={this.state.employeesnew}
            onChange={this.handleMultiChange}
            isMulti
          />
          {console.log(this.state.employeenew)} */}
          <br />
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Input
              type="textarea"
              value={this.state.message}
              onChange={this.handleChange}
              name="message"
            />
          </FormGroup>

          {/* <FormGroup tag="fieldset">
            <legend>Priority</legend>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="high"
                  checked={this.state.priority === "high"}
                  onChange={this.handleChange}
                  name="priority"
                />{" "}
                High
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="medium"
                  checked={this.state.priority === "medium"}
                  onChange={this.handleChange}
                  name="priority"
                />{" "}
                Medium
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="low"
                  checked={this.state.priority === "low"}
                  onChange={this.handleChange}
                  name="priority"
                />{" "}
                Low
              </Label>
            </FormGroup>
          </FormGroup>
          <br /> */}

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.departments);
  return {
    customers: state.customers,
    departments: state.departments,
    employees: state.employees,
    user:state.user
  };
};

export default connect(mapStateToProps)(TicketForm);
