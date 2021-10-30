import React from 'react'
import DoctorForm from './Form'


import {connect} from 'react-redux'
import { startEditDoctor } from '../../../actions/doctors'


class DoctorEdit extends React.Component{


    handleSubmit = (doctor) => {
        const id = this.props.match.params.id
        console.log(id)

        const redirect = () => this.props.history.push(`/subdoctors/${doctor.id}`)
        this.props.dispatch(startEditDoctor(doctor,redirect))
    }

    render(){
        return (
            <div>
            {this.props.doctor && (
                <div>
                    <h2>Edit Doctor</h2>

                    {this.props.doctor.name &&  <DoctorForm doctor = {this.props.doctor} handleSubmit = {this.handleSubmit}/>}
                </div>
            )}

            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        doctor: state.doctors.find(doctor=> doctor._id === id)
    }
}

export default connect(mapStateToProps)(DoctorEdit);