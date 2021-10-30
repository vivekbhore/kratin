import React from 'react'

import TicketForm from './Form'
import generatePassword from "generate-password";

import {connect} from 'react-redux'
import {startAddTicketTwo} from '../../../actions/tickets'

class TicketNew extends React.Component{

    constructor(props){
        super(props);
           this.state={genpassword:""}
    }

    handleSubmit = (ticket) => {

        const redirect = () => this.props.history.push('/pattickets')
        this.props.dispatch(startAddTicketTwo(ticket,redirect))
        setTimeout(() => {
            window.location.reload();
        }, 1000);
}

componentDidMount(){
     // jfjnj

     var gencpassword = generatePassword.generate({
        length: 6,
        numbers: true,
      });
      this.setState({genpassword:gencpassword})
     
      // jfjnj
}
 
    render(){
        return (
            <div>
                <h2>Add Ticket</h2>
                <TicketForm fromnew="fromnew" gencpassword={this.state.genpassword} handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
}



export default connect()(TicketNew)
