import React from 'react'
import DoctorForm from './Form'


import {connect} from 'react-redux'
// import {startAddEmployee} from '../../actions/employees'
import {startAddDoctor} from '../../../actions/doctors'

class DoctorNew extends React.Component{

    handleSubmit = (doctor) => {

            const redirect = () => this.props.history.push('/doctors')
            this.props.dispatch(startAddDoctor(doctor,redirect))
        }


    render(){
        return (
            <div>
                    <h2>Add Doctor</h2>
                    <DoctorForm handleSubmit = {this.handleSubmit}/>

            </div>
        )
    }
}

export default connect()(DoctorNew);