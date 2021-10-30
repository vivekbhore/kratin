import React from 'react'

import TicketForm from './Form'

import {connect} from 'react-redux'
import {startAddTicket} from '../../../actions/tickets'

class TicketNew extends React.Component{
    handleSubmit = (ticket,x) => {
         console.log(ticket);
         console.log(x);
        const redirect = () => this.props.history.push('/tickets')
        // const redirect = () => alert("testing")
        this.props.dispatch(startAddTicket(ticket,x,redirect))
        setTimeout(() => {
            window.location.reload();
        }, 1000);
}

    render(){
        return (
            <div>
                <h2>Add Ticket</h2>
                <TicketForm handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
}



export default connect()(TicketNew)
