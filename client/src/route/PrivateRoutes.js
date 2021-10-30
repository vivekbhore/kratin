import React, { Suspense, lazy, useEffect } from 'react';
import {  Route, Switch, useLocation } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

import { useSelector } from 'react-redux';

import AdminRoute from './auth/AdminRoutes';
import DoctorRoute from './auth/DoctorRoute';
import PatientRoute from './auth/PatientRoute';
import SubAdminRoute from './auth/SubAdminRoute';
import CommonProfRoute from './auth/CommonProfRoute';

 

// admin

import CustomersList from './admin/customers/List';
import CustomerNew from './admin/customers/New';
import CustomerShow from './admin/customers/Show';
import CustomerEdit from './admin/customers/Edit';

import DepartmentsList from './admin/departments/List';
import DepartmentShow from './admin/departments/Show';
import DepartmentEdit from './admin/departments/Edit';

import SubDepartmentsList from './subadmin/departments/List';
import SubDepartmentShow from './subadmin/departments/Show';
import SubDepartmentEdit from './subadmin/departments/Edit';

import EmployeesList from './admin/employees/List';
import EmployeeNew from './admin/employees/New';
import EmployeeShow from './admin/employees/Show';
import EmployeeEdit from './admin/employees/Edit';


import DoctorsList from './admin/doctors/List';
import DoctorNew from './admin/doctors/New';
import DoctorShow from './admin/doctors/Show';
import DoctorEdit from './admin/doctors/Edit';

import TicketsList from './admin/tickets/List';
import TicketNew from './admin/tickets/New';
import SubTicketNew from './subadmin/tickets/New';
import TicketShow from './admin/tickets/Show';
import TicketEdit from './admin/tickets/Edit';

import Reports from './admin/tickets/Reports';
import Profile from './admin/profile/Profile';
// import EditProfile from './admin/profile/EditProfile';
// import CreateNewPassword from './admin/profile/createNewPassword';
import ChangePassword from './admin/profile/ChangePassword';

// admin


//subadmin

import SubReports from './subadmin/tickets/Reports';


import SubCustomersList from './subadmin/customers/List'; 
import SubCustomerNew from './subadmin/customers/New';
import SubCustomerShow from './subadmin/customers/Show';
import SubCustomerEdit from './subadmin/customers/Edit'; 



import SubDoctorsList from './subadmin/doctors/List';
import SubDoctorNew from './subadmin/doctors/New';
import SubDoctorShow from './subadmin/doctors/Show';
import SubDoctorEdit from './subadmin/doctors/Edit';



import SubTicketsList from './subadmin/tickets/List';
// import SubTicketNew from './subadmin/tickets/New';
import SubTicketShow from './subadmin/tickets/Show';
import SubTicketEdit from './subadmin/tickets/Edit';

// import SubDoctorsList from './subadmin/'

import SubProfile from './subadmin/profile/Profile';
// import SubCreateNewPassword from './subadmin/profile/createNewPassword';
import SubChangePassword from './subadmin/profile/ChangePassword';

//subadmin

//doctor
import DocProfile from './doctor/profile/Profile';
// import DocCreateNewPassword from './doctor/profile/createNewPassword';
import DocChangePassword from './doctor/profile/ChangePassword';


import DocTicketsList from './doctor/tickets/List';
import DocTicketNew from './doctor/tickets/New';
import DocTicketShow from './doctor/tickets/Show';
import DocTicketEdit from './doctor/tickets/Edit';


//doctor

//patient
import PatProfile from './patient/profile/Profile';
// import PatCreateNewPassword from './patient/profile/createNewPassword';
import PatChangePassword from './patient/profile/ChangePassword';


import PatTicketsList from './patient/tickets/List';
import PatTicketNew from './patient/tickets/New';
import PatTicketShow from './patient/tickets/Show';
import PatTicketEdit from './patient/tickets/Edit';
// import NotFound from './user/NotFound';




//patient

const AdminDashboard = lazy(() => import('./admin/dashboard'));
const SubAdminDashboard = lazy(() => import('./subadmin/dashboard'));
const DoctorDashboard = lazy(() => import('./doctor/dashboard'));
const PatientDashboard = lazy(() => import('./patient/dashboard'));

// const PatientDashboard=()=>{
//     console.log('inside redirect testing ');

//     return(
//         <h1>hello patient</h1>
//     )
// }

function PrivateRoutes() {

    const user = useSelector(state => state.user)

    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                {/* admin */}
                <AdminRoute exact path={SLUGS.admindashboard} component={AdminDashboard} />
                <AdminRoute exact path={SLUGS.adprofile} component={Profile} />
                {/* <AdminRoute exact path={SLUGS.updateadprofile} component={EditProfile} /> */}

                <AdminRoute path='/customers' component={CustomersList} exact={true} />
                <AdminRoute exact path='/customers/new' component={CustomerNew} />
                <AdminRoute exact path='/customers/edit/:id' component={CustomerEdit} />
                <AdminRoute exact path='/customers/:id' component={CustomerShow} />

                <AdminRoute path='/departments' component={DepartmentsList} exact={true} />
                <AdminRoute exact path='/departments/edit/:id' component={DepartmentEdit} />
                <AdminRoute exact path='/departments/:id' component={DepartmentShow} />

                <AdminRoute path='/employees' component={EmployeesList} exact={true} />
                <AdminRoute exact path='/employees/new' component={EmployeeNew} />
                <AdminRoute exact path='/employees/edit/:id' component={EmployeeEdit} />
                <AdminRoute exact path='/employees/:id' component={EmployeeShow} />

                <AdminRoute path='/doctors' component={DoctorsList} exact={true} />
                <AdminRoute exact path='/doctors/new' component={DoctorNew} />
                <AdminRoute exact path='/doctors/edit/:id' component={DoctorEdit} />
                <AdminRoute exact path='/doctors/:id' component={DoctorShow} />

                <AdminRoute path='/tickets' component={TicketsList} exact={true} />
                <AdminRoute exact path='/tickets/new' component={TicketNew} />
                <AdminRoute exact path='/tickets/edit/:id' component={TicketEdit} />
                <AdminRoute exact path='/tickets/:id' component={TicketShow} />
                <AdminRoute exact path='/reports' component={Reports} />
                {/* <AdminRoute exact path='/createNewPassword/:token' component={CreateNewPassword} /> */}
                <AdminRoute exact path='/updatePassword' component={ChangePassword} />

                {/* admin */}
                {/* subadmin */}
                <SubAdminRoute exact path={SLUGS.subadmindashboard} component={SubAdminDashboard} />

                <SubAdminRoute exact path={SLUGS.subprofile} component={SubProfile} />

                {/* <SubAdminRoute path='/customers' component={CustomersList} exact={true} />
                <SubAdminRoute exact path='/customers/new' component={CustomerNew} />
                <SubAdminRoute exact path='/customers/edit/:id' component={CustomerEdit} />
                <SubAdminRoute exact path='/customers/:id' component={CustomerShow} /> */}

                <SubAdminRoute path='/subtickets' component={SubTicketsList} exact={true} />
                <SubAdminRoute exact path='/subtickets/new' component={SubTicketNew} />
                <SubAdminRoute exact path='/subtickets/edit/:id' component={SubTicketEdit} />
                <SubAdminRoute exact path='/subtickets/:id' component={SubTicketShow} />

                <SubAdminRoute exact path='/subupdatePassword' component={SubChangePassword} />
                {/* <SubAdminRoute path='/subdoctors' component={SubDoctorsList} exact={true} /> */}

                <SubAdminRoute path='/subdoctors' component={SubDoctorsList} exact={true} />
                <SubAdminRoute exact path='/subdoctors/new' component={SubDoctorNew} />
                <SubAdminRoute exact path='/subdoctors/edit/:id' component={SubDoctorEdit} />
                <SubAdminRoute exact path='/subdoctors/:id' component={SubDoctorShow} />

                <SubAdminRoute path='/subdepartments' component={SubDepartmentsList} exact={true} />
                <SubAdminRoute exact path='/subdepartments/edit/:id' component={SubDepartmentEdit} />
                <SubAdminRoute exact path='/subdepartments/:id' component={SubDepartmentShow} />


                <SubAdminRoute path='/subcustomers' component={SubCustomersList} exact={true} />
                <SubAdminRoute exact path='/subcustomers/new' component={SubCustomerNew} />
                <SubAdminRoute exact path='/subcustomers/edit/:id' component={SubCustomerEdit} />
                <SubAdminRoute exact path='/subcustomers/:id' component={SubCustomerShow} />
                
                <SubAdminRoute exact path='/subreports' component={SubReports} />


                {/* <AdminRoute
                    exact
                    path='/subcreateNewPassword/:token'
                    component={SubCreateNewPassword}  
                /> */} 

                {/* subadmin */}
                {/* doctor */}
                <DoctorRoute exact path={SLUGS.docdashboard} component={DoctorDashboard} />
                <DoctorRoute exact path={SLUGS.docprofile} component={DocProfile} />
                <DoctorRoute path='/doctickets' component={DocTicketsList} exact={true} />
                <DoctorRoute exact path='/doctickets/new' component={DocTicketNew} />
                <DoctorRoute exact path='/doctickets/edit/:id' component={DocTicketEdit} />
                <DoctorRoute exact path='/doctickets/:id' component={DocTicketShow} />
                <DoctorRoute exact path='/docupdatePassword' component={DocChangePassword} />

                {/* doctor */}
                {/* patient */}
                <PatientRoute path={SLUGS.patdashboard} exact component={PatientDashboard} />
                <PatientRoute exact path={SLUGS.patprofile} component={PatProfile} />

                <PatientRoute exact path='/patupdatePassword' component={PatChangePassword} />
                <PatientRoute path={SLUGS.patTicketsList} component={PatTicketsList} exact={true} />
                <PatientRoute exact path='/pattickets/new' component={PatTicketNew} />
                <PatientRoute exact path='/pattickets/edit/:id' component={PatTicketEdit} />
                <PatientRoute exact path='/pattickets/:id' component={PatTicketShow} />
                {/* patient */}
                {/* <Route exact path={SLUGS.overviewTwo} render={() => <div>overviewTwo</div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div>overviewThree</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>overview</div>} />
                <Route exact path={SLUGS.tickets} render={() => <div>tickets</div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>ideasThree</div>} />
                <Route exact path={SLUGS.ideas} render={() => <div>ideas</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                <Route exact path={SLUGS.agents} render={() => <div>agents</div>} />
                <Route exact path={SLUGS.articles} render={() => <div>articles</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} /> */}
                {/* <Route component={NotFound}></Route> */}

                {user.role === 1 && <Route component={AdminDashboard} />}
                {user.role === 2 && <Route component={SubAdminDashboard} />}
                {user.role === 3 && <Route component={DoctorDashboard} />}
                {user.role === 4 && <Route component={PatientDashboard} />}
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
