import axios from '../config/axios';

import swal from 'sweetalert2';

export const setDoctors = (doctor) => { 
    return {
        type: 'SET_DOCTORS',
        payload: doctor
    };
};

export const setSubDoctors = (doctor) => { 
    return {
        type: 'SET_SUB_DOCTORS',
        payload: doctor
    };
};


export const startSetDoctors = () => {
    console.log('testing from startSetDoctors');
    return (dispatch) => {
        axios
            .get('/doctors', {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                const doctors = response.data;
                console.log(doctors);
                dispatch(setDoctors(doctors));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const removeDoctor = (doctor) => {
    return {
        type: 'REMOVE_DOCTOR',
        payload: doctor
    };
};

export const startRemoveDoctor = (id) => {
    return (dispatch) => {
        axios
            .delete(`/doctors/${id}`, {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                const doctor = response.data;
                dispatch(removeDoctor(doctor));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const addDoctor = (doctor) => {
    return {
        type: 'ADD_DOCTOR',
        payload: doctor
    };
};

export const startAddDoctor = (doctor, redirect) => {
    return (dispatch) => {
        axios
            .post('/doctors', doctor, {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                if (response.data.errors) {
                    swal.fire(`${response.data.message}`, '', 'error');
                } else {
                    const doctor = response.data;
                    redirect();
                    dispatch(addDoctor(doctor));
                }
            });
    };
};

export const editDoctor = (doctor) => {
    return {
        type: 'EDIT_DOCTOR',
        payload: doctor
    };
};

export const startEditDoctor = (doctor, redirect) => {
    console.log(doctor);
    return (dispatch) => {
        axios
            .put(`/doctors/${doctor.id}`, doctor, {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                console.log(response.data);
                if (response.data.errors) {
                    swal.fire(`${response.data.message}`, '', 'error');
                } else {
                    const doctor = response.data;
                    redirect();
                    dispatch(editDoctor(doctor));
                    window.location.reload();
                    // dispatch(updateTicketEmployee(employee))
                }
            });
    };
};

export const updateDoctorDepartment = (department) => {
    return {
        type: 'UPDATE_DOCTOR_DEPARTMENT',
        payload: department
    };
};

export const startSetDoctorsForSubadmins = ()=>{
    // console.log('testing from substartSetDoctors');
    return (dispatch) => {
        axios
            .get('/subdoctors', {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                const doctors = response.data;
                console.log(doctors);
                dispatch(setSubDoctors(doctors));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}
