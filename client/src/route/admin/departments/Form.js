import React from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap'



class DepartmentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.department ? props.department.name : '' 
        }

    }

    handleChange =(e)=>{
        const name = e.target.value
        this.setState({name})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            name:this.state.name
        }
        this.props.handleSubmit(formData)
        this.setState({name:''})
    }

    render(){
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="text"></Label>
                        <input type="text" id="text" value={this.state.name} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit" value="add">Add</Button>
                </Form>
            </div>
        )
    }
}

export default DepartmentForm