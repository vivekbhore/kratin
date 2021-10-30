import React from 'react'
import TicketForm from './Form'

import {connect} from 'react-redux'
import {startEditTicketTwo} from '../../../actions/tickets'

class TicketEdit extends React.Component{
    handleSubmit = (ticket) => {

        const redirect = () => this.props.history.push(`/pattickets/${ticket.id}`)
        this.props.dispatch(startEditTicketTwo(ticket,redirect))
        setTimeout(() => {
            window.location.reload();
        }, 1000);
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
    return {
        ticket: state.tickets.find(ticket=>ticket._id == id)
    }
}


export default connect(mapStateToProps)(TicketEdit)
