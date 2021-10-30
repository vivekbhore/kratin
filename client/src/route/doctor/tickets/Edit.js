import React from 'react'
import TicketForm from './Form'

import {connect} from 'react-redux'
import {startEditTicketTwoDoc} from '../../../actions/tickets'

class TicketEdit extends React.Component{
    handleSubmit = (ticket) => {

        const redirect = () => this.props.history.push(`/doctickets/${ticket.id}`)
        this.props.dispatch(startEditTicketTwoDoc(ticket,redirect))

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
