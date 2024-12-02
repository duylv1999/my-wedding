import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from "../auth";
import Layout from "../layout";
import { getToken } from "../common/Common";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated() || getToken() != null) {
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

export default PrivateRoute;