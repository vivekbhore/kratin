import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'


class DoctorShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tickets: []
        }
    }

    render(){
        return (
            <div>
                {this.props.doctor && (
                    <div>
                        <h2>
                            {this.props.doctor.name} - {this.props.doctor.email}
                        </h2>
                        <Link to={`/doctors/edit/${this.props.doctor._id}`}>Edit</Link>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        doctor: state.doctors.find((doctor) => doctor._id === id)
    };
}

export default connect(mapStateToProps)(DoctorShow);