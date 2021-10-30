import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import { Table,Button } from 'reactstrap'

import swal from 'sweetalert2'

import {startRemoveDoctor} from '../../../actions/doctors'


class DoctorsList extends React.Component {

    handleRemove = (id) => {
        console.log(this.props.ticket);
        var flag = 0;
        this.props.ticket.map((tick) => {
          tick.doctors.map(emp=>{
              if(emp._id===id)
              {
                  flag=1;
              }
              return emp;
          })
          return tick;
        });
        if(flag===1)
        {
            alert("Cant delete doctor, please delete all tickets assigned to this doctor first")
        }
       else{
         swal.fire({
             title: "Are you sure you want to Delete?",
             icon: "warning",
             buttons: true,
             dangerMode: true,
           })
           .then((confirmRemove) => {
               console.log(confirmRemove);
             if (confirmRemove.isConfirmed) {
               swal.fire("Successfully Deleted", {
                 icon: "success",
               });
               this.props.dispatch(startRemoveDoctor(id))
             }
           })
       }
    }

    findDepartment(id) {
         return this.props.departments.find(dept => dept._id === id)
    }



    render(){
        return(
            <div>
                    <h2>Doctors - {this.props.doctors.length}</h2>
                    <Table striped>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Department</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                                {this.props.doctors.map((doctor,index) => {
                                    return (
                                        <tr key={doctor._id}>
                                        <td>{index+1}</td>
                                        <td>{doctor.name}</td>
                                        <td>{doctor.email}</td>
                                        <td>{doctor.mobile}</td>
                                        <td>{doctor.department.name ? doctor.department.name : this.findDepartment(doctor.department).name}</td>
                                        <td><Link to={`/doctors/${doctor._id}`}><Button color="info">show</Button></Link></td>
                                        <td><Button color="danger" onClick = {()=>{
                                             this.handleRemove(doctor._id)
                                        }}>Remove</Button></td>
                                    </tr>
                                    )

                                })}

                   </tbody>

                   </Table>
                    <Link to="/doctors/new" className="btn btn-primary">Add Doctor</Link>
            </div>
            )
        }
    }

const mapStateToProps = (state) => {
    console.log(state);
    return {
      doctors: state.doctors,
      departments: state.departments,
      ticket: state.tickets,
    };
}

export default connect(mapStateToProps)(DoctorsList);