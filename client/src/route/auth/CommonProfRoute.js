import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CommonProfRoute = ({ component: Component, ...rest }) => {
    const user = useSelector((state) => state.user);
    // console.log(user);

    return (
        <Route
            {...rest}
            render={(props) =>
                user &&
                (user.role === 1 || user.role === 2 || user.role === 3 || user.role === 4) ? (
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

export default CommonProfRoute;
