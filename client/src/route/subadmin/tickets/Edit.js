import React from 'react'
import TicketForm from './Form'

import {connect} from 'react-redux'
// import {startEditTicket} from '../../actions/tickets'
import {startEditTicket} from '../../../actions/tickets'

class TicketEdit extends React.Component{
    handleSubmit = (ticket,x) => {
        console.log(ticket);

        const redirect = () => this.props.history.push(`/tickets/${ticket.id}`)
        // const redirect = () => console.log("new testing");
        this.props.dispatch(startEditTicket(ticket,x,redirect))

    }
    render(){
        return (
            <div>
                {this.props.ticket && (
                    <div>
                        <h2>Edit Ticket</h2>
                         {this.props.ticket && <TicketForm ticket = {this.props.ticket} handleSubmit = {this.handleSubmit}/>}
                     </div>
                )}

            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    console.log(state.tickets);
    return {
        ticket: state.tickets.find(ticket=>ticket._id === id)
    }
}


export default connect(mapStateToProps)(TicketEdit)
