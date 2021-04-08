import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../helpers/Authenticate';

// Check is user is authenticated before redirecting to component. If not, send to login
export default function ProtectedRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}
            render={(props) =>
                (Auth.isAuthenticated() === true
                    ? <Component {...props} />
                    : <Redirect to=
                        {{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )}
        />
    );
}