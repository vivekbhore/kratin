import React from 'react'

import TicketForm from './Form'

import {connect} from 'react-redux'
import {startAddTicket} from '../../../actions/tickets'

class TicketNew extends React.Component{
    handleSubmit = (ticket) => {

        const redirect = () => this.props.history.push('/tickets')
        this.props.dispatch(startAddTicket(ticket,redirect))
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
