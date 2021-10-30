import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {
  userReducer,
  passResetLinkReducer,
  passResetReducer,
} from "../reducers/userReducer";
import customersReducer from '../reducers/customersReducer'
import departmentsReducer from '../reducers/departmentsReducer'

import employeesReducer from '../reducers/employeesReducer'
import ticketsReducer from '../reducers/ticketsReducer'
import doctorsReducer from 'reducers/doctorsReducer';



const configureStore = () => {
    const store = createStore(
        combineReducers({
            user: userReducer,
            passResetLink: passResetLinkReducer,
            passReset: passResetReducer,
            customers: customersReducer,
            departments: departmentsReducer,
            employees: employeesReducer,
            tickets: ticketsReducer,
            doctors: doctorsReducer
        }),
        applyMiddleware(thunk)
    );
    return store
}

export default configureStore