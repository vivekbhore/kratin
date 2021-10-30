import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DoctorRoute = ({ component: Component, ...rest }) => {
    const user = useSelector((state) => state.user);
    console.log(user);

    return (
        <Route
            {...rest}
            render={(props) =>
                user && user.role === 3 ? ( 
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/users/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default DoctorRoute;
