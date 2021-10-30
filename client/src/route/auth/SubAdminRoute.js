import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import SLUGS from "../../resources/slugs";

const SubAdminRoute = ({ component: Component, ...rest }) => { 
    const user = useSelector((state) => state.user);
    console.log(user);

    return (
        <Route
            {...rest}
            render={(props) =>
                user && user.role === 2 ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default SubAdminRoute;
