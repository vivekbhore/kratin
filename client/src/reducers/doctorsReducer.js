const doctorsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DOCTORS':
            return [].concat(state, action.payload);

        case 'REMOVE_DOCTOR':
            return state.filter((doctor) => {
                return doctor._id !== action.payload._id;
            });

        case 'ADD_DOCTOR':
            return [...state, action.payload];

        case 'UPDATE_DOCTOR_DEPARTMENT': {
            return state.map((doctor) => {
                if (doctor.department._id === action.payload._id) {
                    doctor.department = action.payload._id;
                    return { ...doctor };
                } else {
                    return { ...doctor };
                }
            });
        }

        case 'EDIT_DOCTOR':
            return state.map((doctor) => {
                if (doctor._id === action.payload._id) {
                    return Object.assign({}, doctor, action.payload);
                } else {
                    return Object.assign({}, doctor);
                }
            });
        case 'SET_SUB_DOCTORS':  
           return [].concat(state, action.payload);  
        default:
            return [...state];
    }
};

export default doctorsReducer;
