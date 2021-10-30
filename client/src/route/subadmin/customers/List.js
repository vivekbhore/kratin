import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import { Table,Button } from 'reactstrap'

import swal from 'sweetalert2'

// import {startRemoveCustomer} from '../../actions/customers'
import {startRemoveCustomer} from '../../../actions/customers'

class CustomersList extends React.Component {

    handleRemove = (id) => {
        console.log(this.props.ticket)
        var flag = 0;
        this.props.ticket.map(tick=>{
            if(tick.customer._id===id)
            {
              flag=1;

            }
        })
       if(flag===0){
         swal.fire({
             title: "Are you want to Delete?",
             icon: "warning",
             buttons: true,
             dangerMode: true,
           })
           .then((confirmRemove) => {
             if (confirmRemove) {
                 swal.fire(
                     '',
                     'You deleted successfully!',
                     'success'
                   )
               this.props.dispatch(startRemoveCustomer(id))
             }
           })
       }
       else{
         alert("cant delete customer, please delete all tickets of this customer first ")
         flag=0
       }

    }



    render() {
        return (
            <div>
                <h2>Customers - {this.props.customers.length}</h2>

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.customers.map((customer,index)=>{
                            return (
                                <tr key ={customer._id}>
                                    <td>{index+1}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.mobile}</td>
                                    <td>
                                        <Link to={`/subcustomers/${customer._id}`}>
                                        <Button color="info">show</Button></Link>
                                        </td>
                                    <td>
                                        <Button color="danger" onClick={()=>{
                                            this.handleRemove(customer._id)
                                            }}>remove</Button></td>

                                </tr>
                            )

                        })}
                    </tbody>

                </Table>

                <Link to="subcustomers/new" className="btn btn-primary">Add Customer</Link>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      customers: state.customers,
      ticket: state.tickets,
    };
}

export default connect(mapStateToProps)(CustomersList)