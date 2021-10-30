import axios from '../config/axios'

import swal from 'sweetalert2'

export const setTickets = (ticket) => {
    return {
        type: 'SET_TICKETS',
        payload: ticket
    }
}


export const startSetTickets = (role, email) => {
    return (dispatch) => {
        if (role == 1) {
            axios.get('/tickets', {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
                .then(response => {
                    const tickets = response.data
                    dispatch(setTickets(tickets))
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else
            if (role == 4) {
                axios.get('/pattickets', {
                    headers: {
                        'x-auth': localStorage.getItem('authToken')
                    }
                })
                    .then(response => {
                        //  console.log(response.data);
                        const tickets = response.data.filter(item => {

                            return item.customer.email == email;
                        })
                        //  console.log(tickets);


                        dispatch(setTickets(tickets))
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

            // test
            else
                if (role == 3) {
                    axios.get('/doctickets', {
                        headers: {
                            'x-auth': localStorage.getItem('authToken')
                        }
                    })
                        .then(response => {
                             console.log(response.data);
                             var arrm = [];
                            const tickets = response.data.filter(item => {
                                item.doctors.map(it=>{
                                    if(it.email==email)
                                    {
                                        arrm.push(item);
                                    }
                                });
                                return item;
                            })

                             console.log(tickets);
                             console.log(arrm);


                            dispatch(setTickets(arrm))
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
                else
                if(role==2)
                {
                    axios.get('/subadtickets', {
                        headers: {
                            'x-auth': localStorage.getItem('authToken')
                        }
                    })
                        .then(response => {
                            const tickets = response.data
                            dispatch(setTickets(tickets))
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
        // test



    }
}

// ekkkenbkn

// ekkkenbkn





export const removeTicket = (ticket) => {
    return {
        type: 'REMOVE_TICKET',
        payload: ticket
    }
}

export const startRemoveTicket = (id) => {
    return (dispatch) => {
        axios.delete(`/tickets/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                const ticket = response.data
                dispatch(removeTicket(ticket))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET',
        payload: ticket
    }
}

export const startAddTicket = (ticket, x, redirect) => {
    console.log(ticket)

    var arr = [];
    ticket.employees.map((option) => { 
        console.log(option.id);
        const { id } = option;
        arr.push(id);
        return option.value;
    });
    console.log(arr);
    ticket.employees = arr;

    //  arrdoc test
    var arrdoc = [];
    x.map((option) => {
        console.log(option.id);
        const { id } = option;
        arrdoc.push(id);
        return option.value;
    });
    console.log(arrdoc);
    ticket.doctors = arrdoc;
    //  arrdoc test


    ticket.isResolved = false;

    return (dispatch) => {
        axios.post('/tickets', ticket, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                if (response.data.errors) {
                    swal.fire(`${response.data.message}`, "", "error")
                } else {
                    const ticket = response.data
                    dispatch(addTicket(ticket))
                    redirect()
                }
            })
    }
}



// &&&&&&&&&&&
export const startAddTicketTwo = (ticket, redirect) => {
    console.log(ticket)

    // var arr = [];
    // arr.push(ticket.empviv);
    // console.log(arr);
    ticket.employees.push(ticket.empviv);
    ticket.doctors.push(ticket.doctviv);




    ticket.isResolved = false;

    return (dispatch) => {
        axios.post('/tickets', ticket, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                if (response.data.errors) {
                    swal.fire(`${response.data.message}`, "", "error")
                } else {
                    const ticket = response.data
                    dispatch(addTicket(ticket))
                    redirect()
                }
            })
    }
}

// &&&&&&&&&&&
export const editTicket = (ticket) => {
    return {
        type: 'EDIT_TICKET',
        payload: ticket
    }
}



export const startEditTicket = (ticket, x, redirect) => {
    console.log(ticket);
    console.log(ticket.employees.length);
    if (ticket.code) {
        var arr = [];
        ticket.employees.map((option) => {
            console.log(option.id)
            const { id } = option;
            arr.push(id)
            return option.value;
        });
        console.log(arr);
        ticket.employees = arr;

        // trerfmk
        var arrb = [];
        x.map((option) => {
            console.log(option.id);
            const { id } = option;
            arrb.push(id);
            return option.value;
        });
        console.log(arrb);
        ticket.doctors = arrb;
        // trerfmk

        return (dispatch) => {
            axios
                .put(`/tickets/${ticket.id}`, ticket, {
                    headers: {
                        "x-auth": localStorage.getItem("authToken"),
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data.errors) {
                        swal.fire(`${response.data.message}`, "", "error");
                    } else {
                        const ticket = response.data;
                        redirect();
                        dispatch(editTicket(ticket));
                        window.location.reload();
                    }
                });
        };
    }
    else {
        return (dispatch) => {
            axios.put(`/tickets/${ticket.id}`, ticket, {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
                .then(response => {
                    console.log(response.data)
                    if (response.data.errors) {
                        swal.fire(`${response.data.message}`, "", "error")
                    } else {
                        const ticket = response.data
                        redirect()
                        dispatch(editTicket(ticket))
                        window.location.reload();

                    }
                })
        }
    }

}


// kkegkegkk
// for patients
export const startEditTicketTwo = (ticket, redirect) => {
    console.log(ticket);
    console.log(ticket.employees.length);
    if (ticket.code) {
        var arr = [];
        ticket.employees.map((option) => {
            console.log(option.id)
            const { id } = option;
            arr.push(id)
            return option.value;
        });
        console.log(arr);
        ticket.employees = arr;

        ticket.doctors.push(ticket.doctviv);

        // trerfmk
        //  var arrb = [];
        //  x.map((option) => {
        //      console.log(option.id);
        //      const { id } = option;
        //      arrb.push(id);
        //      return option.value;
        //  });
        //  console.log(arrb);
        //  ticket.doctors = arrb;
        // trerfmk

        return (dispatch) => {
            axios
                .put(`/tickets/${ticket.id}`, ticket, {
                    headers: {
                        "x-auth": localStorage.getItem("authToken"),
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data.errors) {
                        swal.fire(`${response.data.message}`, "", "error");
                    } else {
                        const ticket = response.data;
                        redirect();
                        dispatch(editTicket(ticket));
                        window.location.reload();
                    }
                });
        };
    }
    else {
        return (dispatch) => {
            axios.put(`/tickets/${ticket.id}`, ticket, {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
                .then(response => {
                    console.log(response.data)
                    if (response.data.errors) {
                        swal.fire(`${response.data.message}`, "", "error")
                    } else {
                        const ticket = response.data
                        redirect()
                        dispatch(editTicket(ticket))
                        window.location.reload();

                    }
                })
        }
    }

}
// kkegkegkk

// jnvdjvjdvjvivdoc

export const startEditTicketTwoDoc = (ticket, redirect) => {
    alert("kknfkedn");
    console.log(ticket);
    console.log(ticket.employees.length);
    if (ticket.code) {
        var arr = [];
        ticket.employees.map((option) => {
            console.log(option.id)
            const { id } = option;
            arr.push(id)
            return option.value;
        });
        console.log(arr);
        ticket.employees = arr;

        // ticket.doctors.push(ticket.doctviv);

        // trerfmk
        //  var arrb = [];
        //  x.map((option) => {
        //      console.log(option.id);
        //      const { id } = option;
        //      arrb.push(id);
        //      return option.value;
        //  });
        //  console.log(arrb);
        //  ticket.doctors = arrb;
        // trerfmk

        return (dispatch) => {
            axios
                .put(`/tickets/${ticket.id}`, ticket, {
                    headers: {
                        "x-auth": localStorage.getItem("authToken"),
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data.errors) {
                        swal.fire(`${response.data.message}`, "", "error");
                    } else {
                        const ticket = response.data;
                        redirect();
                        dispatch(editTicket(ticket));
                        window.location.reload();
                    }
                });
        };
    }
    else {
        return (dispatch) => {
            axios.put(`/tickets/${ticket.id}`, ticket, {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
                .then(response => {
                    console.log(response.data)
                    if (response.data.errors) {
                        swal.fire(`${response.data.message}`, "", "error")
                    } else {
                        const ticket = response.data
                        redirect()
                        dispatch(editTicket(ticket))
                        window.location.reload();

                    }
                })
        }
    }

}
// jnvdjvjdvjviv

export const toggleResolve = (ticket) => {
    return {
        type: 'TOGGLE_RESOLVE',
        payload: ticket
    }
}

export const startToggleResolve = (id, isResolved) => {
    return (dispatch) => {
        axios.put(`/tickets/${id}`, { isResolved: !isResolved }, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        dispatch(toggleResolve(id))

    }
}

export const searchTicket = (search) => {
    return {
        type: 'SEARCH_TICKET',
        payload: search
    }
}

export const updateTicketCustomer = (customer) => {
    return {
        type: 'UPDATE_TICKET_CUSTOMER',
        payload: customer
    }
}

export const updateTicketDepartment = (department) => {
    return {
        type: 'UPDATE_TICKET_DEPARTMENT',
        payload: department
    }
}