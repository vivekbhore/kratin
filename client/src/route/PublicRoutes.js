import LoadingComponent from 'components/loading';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import CreateNewPassword from './user/createNewPassword';
import ForgotPassword from './user/ForgotPassword';

import Login from './user/Login';
// import NotFound from './user/NotFound';
import PublicDashboard from './user/PublicDashboard';
import Register from './user/Register';

function PublicRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path={SLUGS.login} component={Login} />
            <Route exact path={SLUGS.publicdashboard} component={PublicDashboard} />
            <Route exact path={SLUGS.signup} component={Register} />
            <Route exact path='/forgot_password' component={ForgotPassword} />;
            <Route exact path='/createNewPassword/:token' component={CreateNewPassword} />
            <Route component={LoadingComponent}></Route>
            {/* <Redirect to={SLUGS.login} /> */}
        </Switch>
    );
}

export default PublicRoutes;
