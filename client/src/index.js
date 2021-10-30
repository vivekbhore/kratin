import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Theme from 'resources/theme';
import Routes from 'route';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { setUser } from './actions/user';
import { startSetCustomers,startSetCustomersForSubadmins } from './actions/customers';
import { startSetDepartments } from './actions/departments';
import { startSetEmployees } from './actions/employees';
import { startSetTickets} from './actions/tickets';



import axios from './config/axios';
import { startSetDoctors,startSetDoctorsForSubadmins } from 'actions/doctors';

// console.log(localStorage.getItem("authToken"));
const store = configureStore();
if (localStorage.getItem('authToken')) {
    axios
        .get('/users/account', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const user = response.data;
            // console.log(user);
            store.dispatch(setUser(user));
            store.dispatch(startSetDepartments());
            store.dispatch(startSetEmployees());
            store.dispatch(startSetTickets(user.role,user.email));
             if(user.role==2)
                {
                    store.dispatch(startSetDoctorsForSubadmins()); 
                    store.dispatch(startSetCustomersForSubadmins()); 
                }
                else
                {
                    store.dispatch(startSetDoctors()); 
                    store.dispatch(startSetCustomers());


                }
        
            
        });
}

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={Theme}>
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
        </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
