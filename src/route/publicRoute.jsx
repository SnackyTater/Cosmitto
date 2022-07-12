import React from 'react'
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { checkAuthorization } from '../utils/auth';

export default function PublicRoute({ Component, ...rest }) {
    const isAuth = checkAuthorization();

    const CustomRoute = (props) => {
        if (!isAuth) {
            return <Component {...props} {...rest} />
        } else {
            return <Navigate to="/home" replace={true} />
        }
    }

    return <CustomRoute />
}

PublicRoute.propTypes = {
    component: PropTypes.elementType
}