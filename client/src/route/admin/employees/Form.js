import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'

import {connect} from 'react-redux'



class EmployeeForm extends React.Component {
    constructor(props){
        super(props)
        console.log(props.employee)
        this.state = {
          name: props.employee ? props.employee.name : "",
          email: props.employee ? props.employee.email : "",
          mobile: props.employee ? props.employee.mobile : "",
          department: props.employee ? props.employee.department._id : "",
          id: props.employee ? props.employee._id : "",
        };
    }

        handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault()
            const formData = {
                name:this.state.name,
                email:this.state.email,
                mobile:this.state.mobile,
                department:this.state.department,
                id:this.state.id
            }
            console.log(formData)
            this.props.handleSubmit(formData)
        }

        // componentWillReceiveProps(nextProps){
        //     if(nextProps.employee !== undefined){
        //     const {name,email,mobile,department} = nextProps.employee
        //     this.setState({name,email,mobile,department})
        //     }
        // }


    render(){
        //
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>

                    <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" value={this.state.name} onChange={this.handleChange} name="name"/>
                    </FormGroup>

                    <FormGroup>
                    <Label htmlFor="email">Email</Label>
                        <Input type="text" id="email" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </FormGroup>

                    <FormGroup>
                    <Label htmlFor="mobile">Mobile</Label>
                        <Input type="text" id="mobile" value={this.state.mobile} onChange={this.handleChange} name="mobile"/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="department">Department</Label>
                        <Input type="select" id="department" value={this.state.department} onChange={this.handleChange} name="department">
                        <option value="">select</option>
                        {this.props.departments.map(department=>{
                             return < option key={department._id} value={department._id}>{department.name} </option>
                        })}
                        </Input>
                    </FormGroup>
                    <Button type="submit" value="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
}

export default connect(mapStateToProps)(EmployeeForm)