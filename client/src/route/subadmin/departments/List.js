import React from 'react'
import {Link} from 'react-router-dom'
import { ListGroup, ListGroupItem,Button } from 'reactstrap'

import {connect} from 'react-redux'

import DepartmentForm from './Form'
// import { startRemoveDepartment, startAddDepartment } from '../../actions/departments'
import { startRemoveDepartment, startAddDepartment } from '../../../actions/departments'

import swal from 'sweetalert2'

class DepartmentsList extends React.Component {

    handleSubmit = (department) => {
    const redirect = () => this.props.history.push('/departments')
    this.props.dispatch(startAddDepartment(department,redirect))
 }


  handleRemove = (id) =>{

    var flag=0
    this.props.employees.map(emp=>{
      if(emp.department._id===id)
      {
        flag=1
      }
      return emp;
    })
    if(flag===1)
    {
      alert("Cant delete department, please delete all employees working in this department first")
      flag = 0;

    }
    else{
      swal.fire({
          title: "Are you sure you want to Delete?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((confirmDelete) => {
          if (confirmDelete) {
            swal.fire("Successfully Deleted!!", {
              icon: "success",
            });
            this.props.dispatch(startRemoveDepartment(id))
          }
        })
    }



    // console.log(this.props.employees);



  }
    render(){
        return (
            <div>
                <h2>Departments - {this.props.departments.length}</h2>
                    <ListGroup>
                        {this.props.departments.map(dept=>{
                           return <ListGroupItem key={dept._id}>{dept.name}
                                <Button className="float-right" color="danger" onClick={()=>{
                               this.handleRemove(dept._id)
                           }}>remove</Button>
                        <Link to={`/departments/${dept._id}`}><Button className="float-right mr-5" color="info">show</Button></Link>
                        </ListGroupItem> }
                        )}
                    </ListGroup>
                    <br/>
                    <h3>Add Department</h3>
                    <DepartmentForm handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      departments: state.departments,
      employees: state.employees,
    };
}

export default connect(mapStateToProps)(DepartmentsList)
